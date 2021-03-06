var ZoomGrid = (function() {
	var w = $(window);
	var grid = $('.grid');
	var item = $('.grid__item');
	var itemContent = item.find('.grid__link');
	var post = $('.post');
	var backBtn = post.find('.post__back');
	var nextBtn = post.find('.post__forw');
	var breakpoint = 700;
	var isBig = false;

	var zoom = function(event) {
		var content = $(this).find('.grid__link');
		var self = $(this);
		var index = self.attr('data');
		var vw = w.innerWidth();
		var vh = w.innerHeight();
		var ds = $(document).scrollTop();
		var px = event.pageX;
		var py = event.pageY;

		// scale stuff
		var iw = $(this).innerWidth();
		var ih = $(this).innerHeight();
		var sx = vw/iw;
		var sy = vh/ih;
		
		// transform-origin stuff
		var o = $(this).offset();
		var xc = vw/2;
		var yc = ds + vh/2;
		
		var dsp = ds/ (vh+ds) * 100;
		
		tox = px/vw *100;
		toy = py/vh *100;
		toy = toy - dsp;

		if (!isBig && vw >= breakpoint) {
			grid.css({
				'transform-origin': tox + '% ' + toy + '%'
			});

			setTimeout(function() {
				requestAnimationFrame(function() {
					grid.css({
						'transform-origin': tox + '% ' + toy + '%',
						'transform': 'scale(' + sx + ',' + sy + ')'
					});
					itemContent.css({'opacity': '0'});
					$('body').css('overflow', 'hidden');
					showPost(index); // show post function
					isBig = true;
				});

			}, 50);


		} else {
			// this stuff happens at the breakpoint/smaller screens
			itemContent.css({
				'opacity': '0'
			});
			showPost(index);
			isBig = true;
		}
		return false;
	};

	var zoomout = function() {
		// reset grid back to normal/hide post
		if (isBig) {
			post.addClass('post--hide');
			post.removeClass('post--active');
			post.on('transitionend', function() {
				grid.css({
					'transform': 'scale(1)'
				});
				itemContent.css({'opacity': '1'});
				$('body').removeAttr('style');
				post.off('transitionend');
				$(".post__wrapper").empty();
			});

			isBig = false;
		}
		return false;
	};
	
	var showPost = function(id) {
		$.ajax({
			type: "POST",
	        url:"home/news/getNewsById",
	        data: {"id":id},
	        success: function(data) {
	        	var html_content = data.content;
	        	$(".post__wrapper h1").text(data.title);
	        	var html_title = '<h1>'+data.title+'</h1>';
	        	var html_auth = '<h3>Posted by BLING LADY</h3>';
	        	$(".post__wrapper").append(html_title).append(html_auth);
	        	$(".post__wrapper").append($("<div/>").html(html_content).text());
	        	post.removeClass('post--hide').addClass('post--active');
	        },
	        error: function(request) {
	            console.log("服务器出错了");
	        }
		});
	};

	var nextPost = function() {
		var cur = $('.post--active');
		var next = cur.next('.post');
		if (!next.length) {
			next = post.first();
		}
		cur.addClass('post--hide').removeClass('post--active');
		next.removeClass('post--hide').addClass('post--active');
		return false;
	};
	
	var bindActions = function() {
//		$(document).on('click',item, zoom);
		item.live('click', zoom);
		backBtn.live('click', zoomout);
		nextBtn.on('click', nextPost);
	};
	
	var init = function() {
		bindActions();
	};
	
	return {
		init: init
	};

}());

ZoomGrid.init();

var pageNum = 1;
var pageSize = 6;
$("#addMore").click(function(){
	loadNews(++pageNum);
});

loadNews(pageNum);

function loadNews(pageNum){
	$.ajax({
		type: "POST",
        url:"home/news/loadNews",
        data: {"page":pageNum},
        success: function(data) {
        	var newsList = data.rows;
        	if(newsList.length > 0){
        		for(var i=0;i<newsList.length; i++){
        			var html_tmp = '<li class="grid__item grid__item--4" data="'+newsList[i].id+'">'
			    					+'<a href="javascript:;" class="grid__link" data="'+newsList[i].id+'">'
			    					+'	<h2 class="grid__title">'+newsList[i].title+'</h2>'
			    					+'	<p>BLING LADY</p>'
			    					+'</a>'
			    					+'</li>';
        			$(".grid").append(html_tmp);
        		}
        		if(newsList.length < pageSize){
        			$("#addMore").hide();
        		}
        	}else{
        		//最后一页
        		$("#addMore").hide();
        	}
        },
        error: function(request) {
            console.log("服务器出错了");
        }
	})
}