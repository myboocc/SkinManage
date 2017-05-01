
$(function(){
	
	$("#header-nav li").hover(function(){
		$(this).find("center").toggleClass('show');
	})
	
	$("#join-content ul li").hover(function(){
		$(this).find('.describe').toggleClass("show");
		$(this).find('p').toggleClass("color");
	})
	
	$("#backTop").click(function(){
	   $('body,html').animate({scrollTop:0},1000);
	})
	
	$("#sendMessage").click(function(){
		if(checkForm() == true){
			$.ajax({
	            type: "POST",
	            url:"user/sendEmail",
	            data:$('#subForm').serialize(),
	            success: function(data) {
	            	alert(data);
	            },
	            error: function(request) {
	                alert("信息发送失败，请联系电话：15161668306");
	            }
	            
	        });
		}
	});
	
})

function checkForm(){
	var result;
	$("#subForm input").each(function(index){
		var val = $(this).val();
		var title = $(this).attr('title');
		if(val === null || val.trim() === "" || val === " "){
			alert(title);
			result = false;
			$(this).focus();
			return false;
		}
		result =  true;
	})
	return result;
}

var screenHeight = $(window).height();
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	if(scrollTop > screenHeight){
		if($(".header-fixed").hasClass("show")){
			return ;
		}
		$(".header-fixed").slideDown(200).addClass("show");
		$(".toolbar").css("right","0");
	}
	if(scrollTop < screenHeight){
		if(!$(".header-fixed").hasClass("show")){
			return ;
		}
		$(".header-fixed").slideUp(200).removeClass("show");
		$(".toolbar").css("right","-100%");
	}
});