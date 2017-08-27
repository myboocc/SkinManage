<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html>
  <head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<title>皮肤管理和半永久培训招生</title>
		<link rel="shortcut icon" href="images/favicon.ico" />
		<meta name="keywords" content="皮肤管理">
		<meta name="description" content="皮肤管理">

		<link href="css/libs_98e9c.css" rel="stylesheet" type="text/css">
		<link href="css/global_f7a4255f76.css" rel="stylesheet" type="text/css">
		<link href="css/page_9432c0ef7f.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" type="text/css" href="css/index.css"/>
		<link rel="stylesheet" type="text/css" href="css/news.css"/>
		<link rel="stylesheet" type="text/css" href="css/idangerous.swiper.css"/>

		<script>
			//判断是否为移动端
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				window.location = "mobile_index.jsp";
			}
			//判断用户登录后需要执行的全局函数的集合对象
			var loginFn = {};

			//移动设备判断
			function isIE() {
				var myNav = navigator.userAgent.toLowerCase();
				return(myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
			};

			var v = window.isIE();
			if(v == 6 || v == '7' || v == '8') {
				window.location.href = '/notice/notSupport';
			}
		</script>
		<script>
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "https://hm.baidu.com/hm.js?317d808f796c39bb0ef2a4181d5e1bb2";
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
		</script>
	</head>

	<body>
		<div class="wrap" style="width: 100%;">
			<!--导航部分-->
			<div class="header">
				<ul class="header-nav">
					<li>
						<a href="#thinking" class="topLink">品牌理念</a>
					</li>
					<li>
						<a href="#trainproject" class="topLink">培训项目</a>
					</li>
					<li>
						<img src="images/logo.png" style="vertical-align: middle;margin: 0 10px;"/>
					</li>
					<li>
						<a href="#join-content" class="topLink">公司优势</a>
					</li>
					<li>
						<a href="#email-content" class="topLink">在线咨询</a>
					</li>
				</ul>
			</div>
			<div class="header-fixed">
				<ul class="header-nav" id="header-nav">
					<li class="logo">
						<img src="images/logo2.png" style="vertical-align: middle;"/>
					</li>
					<!-- <li>
						<a href="#join-content" class="topLink"><span class="nav_en">JOIN</span>&nbsp;&nbsp;&nbsp;加入政策</a>
						<center><hr style="width:60%;text-align:center;" /></center>
					</li> -->
					<li>
						<a href="#join-content" class="topLink"><span class="nav_en">JOIN</span>&nbsp;&nbsp;&nbsp;公司环境</a>
						<center><hr style="width:60%;text-align:center;" /></center>
					</li>
					<li>
						<a href="#trainproject" class="topLink"><span class="nav_en">PROJECT</span>&nbsp;&nbsp;&nbsp;培训项目</a>
						<center><hr style="width:60%;text-align:center;" /></center>
					</li>
					<li>
						<a href="#thinking" class="topLink"><span class="nav_en">CONCEPT</span>&nbsp;&nbsp;&nbsp;品牌理念</a>
						<center><hr style="width:60%;text-align:center;" /></center>
					</li>
					<li>
						<a href="javascript:;"><span class="nav_en">HOME</span>&nbsp;&nbsp;&nbsp;首页</a>
						<center><hr style="width:60%;text-align:center;" /></center>
					</li>
				</ul>
			</div>
			
			<div class="lab_slider">
				<div class="slider_show">
					<ul class="show_moving" >
						<li >
							<a href="javascript:;">
								<img class="big_img" src="images/slide_01.jpg">
								<span class="slider_title" ></span>
								<span class="slider_shadow"></span>
							</a>
						</li>
						<li >
							<a href="javascript:;">
								<img class="big_img" src="images/slide_02.jpg" >
								<span class="slider_title" ></span>
								<span class="slider_shadow"></span>
							</a>
						</li>
						<li >
							<a href="javascript:;">
								<img class="big_img" src="images/slide_03.jpg" >
								<span class="slider_title" ></span>
								<span class="slider_shadow"></span>
							</a>
						</li>
						<li >
							<a href="javascript:;">
								<img class="big_img" src="images/slide_04.jpg" >
								<span class="slider_title" ></span>
								<span class="slider_shadow"></span>
							</a>
						</li>
						<li >
							<a href="javascript:;">
								<img class="big_img" src="images/slide_05.jpg" >
								<span class="slider_title" ></span>
								<span class="slider_shadow"></span>
							</a>
						</li>
					</ul>
					<ul class="slider_arrow">
						<li class="arrow_left"></li>
						<li class="arrow_right"></li>
					</ul>
				</div>
				<ul class="slider_point">
					<li class=""></li>
					<li class=""></li>
					<li class=""></li>
				</ul>
				<div class="slider_tip" style="display: none;"></div>
			</div>
			
			<div class="middle-content">
				<div id="thinking">
					<img src="images/thinking.jpg" />
				</div>
				<!-- 联系电话 -->
				<div id="LianXiDianHua">
					<img src="images/lianxidianhua.jpg" />
				</div>
				<div id="trainproject">
					<img src="images/trainproject.jpg"/>
				</div>
			</div>
			
			<!-- 项目培训 -->
			<div class="project-content clear">
				<ul id="da-thumbs" class="da-thumbs">
					<li>
						<img src="images/trainproject/trainproject_01.jpg"/>
						<div>
							<span>雪花焕肤</span>
							<span class="desc">
								雪花焕肤通过雪花面膜补充皮肤的胶原蛋白，紧致收缩毛孔，能深层美白淡化黑色素，治疗一次就能看到红肿的痘印淡化，让沉淀的小黑斑和黑痘印也能迅速瓦解，焕活美白效果立现。
							</span>
						</div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_02.jpg"/>
						<div>
							<span>皮肤管理</span>
							<!-- <span class="desc">
								MTS皮肤管理又称为微针疗法或者微针疗法美容。其应用原理是经由刺激皮肤真皮层的胶原蛋白增生，不会破坏皮肤表皮层，从而唤醒以及提升肌肤的再生功能。
							</span> -->
						</div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_03.jpg"/>
						<div>
							<span>小气泡深层清洁</span>
							<span class="desc">
								超微小气泡是通过真空负压形成真空回路，将超微小气泡和营养液充分结合，通过特殊设计的小螺旋形洗头直接作用于皮肤，且能保持微小气泡长时间接触皮肤，促进剥离作用...
							</span>
						</div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_04.jpg"/>
						<div>
							<span>黄金焕肤</span>
							<span class="desc">
								黄金焕肤是指利用黄金的传导原理，让美容的有效成分更快更深入传达到皮肤，起到更好的抗衰老作用。
							</span>
						</div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_05.jpg"/>
						<div>
							<span>海藻焕肤</span>
							<!-- <span class="desc">
								海藻矽针焕肤是利用海藻矽针进入表皮深层，启动表皮皮肤的微循环，让老化的角质层自然的剥除。
							</span> -->
						</div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_06.jpg"/>
						<div>
							<span>新娘管理</span>
							<span class="desc">
								新娘管理是针对准新娘进行的婚前皮肤保养，通过充分补水，收缩毛孔；深层美白，激活胶原蛋白等方式逆转肌龄，让新娘在婚礼呈现出最美的一面。
							</span>
						</div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_07.jpg"/>
						<div>
							<span>樱花焕肤</span>
							<span class="desc">
								樱花焕肤利用樱花的抗氧化性，有效对抗黑色素沉淀，起到改善暗沉肤色的作用。
							</span>
						</div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_08.jpg"/>
						<div><span>韩国</span></div>
					</li>
				</ul>
			</div>
			
			<div class="download-content">
				<p>MORE</p>
				<a href="user/download?fileName=BLINGLADY_JoinManual.pdf"><img src="images/downloadicon.png"/></a>
			</div>
			
			<div class="join-content" id="join-content">
				<!-- <img src="images/join/join.jpg"/> -->
				<ul class="clear">
					<li>
						<img src="images/join/join_01.jpg"/>
						<!-- <p>统一品牌形象</p>
						<img class="describe" src="images/join/join_01.png"/> -->
					</li>
					<li>
						<img src="images/join/2-1.png"/>
						<!-- <p>提供专业培训</p>
						<img class="describe" src="images/join/2-2.png"/> -->
					</li>
					<li>
						<img src="images/join/3-1.png"/>
						<!-- <p>专属渠道</p>
						<img class="describe" src="images/join/3-2.png"/> -->
					</li>
					<li>
						<img src="images/join/4-1.png"/>
						<!-- <p>资源共享</p>
						<img class="describe" src="images/join/4-2.png"/> -->
					</li>
					<li>
						<img src="images/join/5-1.png"/>
						<!-- <p>宣传推广扶持</p>
						<img class="describe" src="images/join/5-2.png"/> -->
					</li>
					<li>
						<img src="images/join/6-1.png"/>
						<!-- <p>“新店活动”支持</p>
						<img class="describe" src="images/join/6-2.png"/> -->
					</li>
					<li>
						<img src="images/join/7-1.png"/>
						<!-- <p>整店输出模式</p>
						<img class="describe" src="images/join/7-2.png"/> -->
					</li>
					<li>
						<img src="images/join/8-1.png"/>
						<!-- <p>会员增值服务</p>
						<img class="describe" src="images/join/8-2.png"/> -->
					</li>
					<li>
						<img src="images/join/9-1.png"/>
						<!-- <p>特别续航支持</p>
						<img class="describe" src="images/join/9-2.png"/> -->
					</li>
					<li>
						<img src="images/join/10-1.png"/>
						<!-- <p>鼓励政策</p>
						<img class="describe" src="images/join/10-2.png"/> -->
					</li>
				</ul>
			</div>
			
			<div class="download-joinMaum">
				<p>MORE</p>
				<a href="user/download?fileName=BLINGLADY_JoinManual.pdf">点击下载手册</a>
				<p style="margin-top: 5px;"><img src="images/downloadicon.png"/></p>
			</div>
			
			<div class="youshi">
				<div id="youshi">
					<img src="images/youshi.jpg" />
				</div>
			</div>
			<div class="lianxiwomen">
				<div id="lianxiwomen">
					<img src="images/lianxiwomen.jpg" />
				</div>
			</div>
			<!-- 教学环境 -->
			<div class="jiaoXueHuanjing">
				<div id="jiaoXueHuanjing">
					<img src="images/huanjing.jpg" />
				</div>
			</div>
			
			<div class="email-content" id="email-content">
				<h1>发送您的信息给我们</h1>
				<h3>SEND YOUR INFORMATION TO US</h3>
				<h1><img src="images/email.png"/></h1>
				<form action="user/sendEmail" method="post" id="subForm">
					<div class="form-content">
						<p>YOUR INFORMATION</p>
						<ul class="clear">
							<li>
								<h2>姓名</h2>
								<input type="text" name="name" value="" title="请输入姓名" placeholder="NAME" required="required" />
							</li>
							<li>
								<h2>年龄</h2>
								<input type="number" name="age" value="" title="请输入年龄" placeholder="AGE"  required="required"/>
							</li>
							<li>
								<h2>城市</h2>
								<input type="text" name="city" value="" title="请输入城市" placeholder="CITY" required="required"/>
							</li>
							<li>
								<h2>联系电话</h2>
								<input type="number" name="phone" value="" title="请输入联系电话" placeholder="PHONE" required="required"/>
							</li>
							<li>
								<h2>微信</h2>
								<input type="text" name="wechat" value="" title="请输入微信号" placeholder="WECHAT" required="required"/>
							</li>
						</ul>
						<div class="email-sub-info">
							 <a href="javascript:;" id="sendMessage">SEND</a> 
							<p>发送成功后，将会有工作人员与您取得联系，请您耐心等待<br>感谢您对BLING LADY的支持与信任</p>
						</div>
					</div>
				</form>
			</div>
			
			<div class="store-show">
				<img src="images/store-show.jpg"/>
			</div>
			
			<div class="showPic-wrap">
				<a class="arrow-left" href="#"></a> 
			    <a class="arrow-right" href="#"></a>
		    	<!--南京-->
			    <div class="swiper-container swiper1" id="nanjing">
			        <div class="swiper-wrapper">
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/nj-1.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/nj-2.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/nj-3.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/nj-4.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/nj-5.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/nj-6.jpg"> 
				        </div>
			        </div>
			    </div>
		    	<!--山东-->
			    <div class="swiper-container swiper2" id="shandong">
			        <div class="swiper-wrapper">
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/sd-1.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/sd-2.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/sd-3.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/sd-4.jpg"> 
				        </div>
			        </div>
			    </div>
		        <!--天津-->
			    <div class="swiper-container swiper3" id="tianjin">
			        <div class="swiper-wrapper">
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/tj-1.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/storeShow/tj-2.jpg"> 
				        </div>
			        </div>
			    </div>
			    
			    <div class="city-choice">
			    	<ul class="clear">
			    		<li data="nanjing">南京店</li>
			    		<li data="shandong" style="width: 36%;">山东菏泽天美商场店</li>
			    		<li data="shandong" style="width: 36%;">山东新苏天美商场店</li>
			    		<li data="tianjin">天津店</li>
			    	</ul>
			    </div>
			</div>
			
			<!--新闻模块-->
			<ul class="grid">
			</ul>
			
			<section class="post">
				<article class="post__wrapper">
				</article>
				<a href="" class="post__back">
					<svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 11h5v-6h-5v6zm0 7h5v-6h-5v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5v-6h-5v6zm6-6v6h5v-6h-5z"/><path d="M0 0h24v24h-24z" fill="none"/>
					</svg> 返回
				</a>
				<!-- <a href="" class="post__forw">
					下一篇<svg width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24h-24z" fill="none"/><path d="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z"/></svg> 
				</a> -->
			</section>
			
			<div class="download-joinMaum" style="margin-bottom: 3%;">
				<a href="javascript:;" id="addMore">点击加载更多</a>
			</div>
			
			<div class="footer-content">
				<div class="footer-top">
					<ul class="ul-wrap clear">
						<li><img src="images/footer/footer-logo.png" style="vertical-align: middle;"/></li>
						<li style="text-align: left;">
							专业皮肤管理中心<br />
							“安全、无创、健康”<br />
							美自于定制、美自于专属<br />
							适合东方女性的审美风格<br />
							为追求生活质量信任品牌的精英人士<br />
							打造属于你们的个性LOOK！
						</li>
						<li class="third-li">
							<ul class="footer-nav-wrap">
								<li><a href="javascript:;">网站首页</a></li>
								<li><a href="javascript:;">品牌理念</a></li>
								<li><a href="javascript:;">培训项目</a></li>
								<li><a href="javascript:;">公司优势</a></li>
							</ul>
							<ul class="contactus">
								<li>联系我们</li>
								<li><img src="images/footer/erweima.jpg"/></li>
							</ul>
							<ul class="contact-number">
								<li>
									<img src="images/footer/wechaticon.png"/>tcbj1222
								</li>
								<li>
									<img src="images/footer/phoneicon.png"/>15161668306
								</li>
								<li>
									<img src="images/footer/qqicon.png"/>3257990338
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="footer-bottom">
					<h2>BLING LADY 皮肤管理连锁机构</h2>
					<h3>南京朵爵商贸有限公司</h3>
					<h3>江苏省南京市六合区金宁广场写字楼2304</h3>
					<h2 style="font-size: 12px;margin-top: 2%;">苏ICP备15051990号-2</h2>
				</div>
			</div>
			
		</div>
		
		<div class="toolbar">
			<a href="javascript:;" class="toolbar-item toolbar-item-wechat">
				<span class="toolbar-btn"></span>
			</a>
			<a href="javascript:;" class="toolbar-item toolbar-item-feedback">
				<span class="toolbar-btn"></span>
			</a>
			<a id="backTop" href="javascript:;" class="toolbar-item toolbar-item-top">
				<span class="toolbar-btn"></span>
			</a>
		</div>

		<script src="jslib/jquery-1.8.3.js"></script>
		<script src="js/jquery.easing.1.3.min.js"></script>
		<script src="js/modernizr.custom.97074.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/libs_bd5c2.js"></script>
		<script src="js/global_f7a426084d.js"></script>
		<script src="js/page_9432c8a608.js"></script>
		<script src="js/index.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/news.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/jquery.hoverdir.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/idangerous.swiper.min.js"></script>
		<script>
			$(function() {
				Z.use('index/banner');
				Z.use('index/page');
				Z.use('global/header');
				Z.use('footer/footer');
				
				var mySwiper1 = new Swiper('.swiper1',{
				    loop:true,
				    autoplay :3000,
				    autoplayDisableOnInteraction:false,
				    grabCursor: true
				})
				var mySwiper2 = new Swiper('.swiper2',{
				    loop:true,
				    autoplay :3000,
				    autoplayDisableOnInteraction:false,
				    grabCursor: true
				})
				var mySwiper3 = new Swiper('.swiper3',{
				    loop:true,
				    autoplay :3000,
				    autoplayDisableOnInteraction:false,
				    grabCursor: true
				})
				
				$('.arrow-left').on('click', function(e){
				    e.preventDefault()
				    mySwiper1.swipePrev()
				})
				$('.arrow-right').on('click', function(e){
				    e.preventDefault()
				    mySwiper1.swipeNext()
				})
				
				//轮播图选择
				$(".city-choice ul li").on('click',function(){
					var data = $(this).attr('data');
					$("#"+data).css('display','block').siblings(".swiper-container").hide();
					if(data == "shandong"){
						mySwiper2.reInit();
					}else if(data == "tianjin"){
						mySwiper3.reInit();
					}else{
						mySwiper1.reInit();
					}
				})
				
				$(' #da-thumbs > li ').each( function() { $(this).hoverdir({
					hoverDelay : 75
				}); } );
				
				$(".middle-content").css("padding-top",$(window).height());
				
				$("a.topLink").click(function() {
				    $("html, body").animate({
				      scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
				    }, {
				      duration: 500,
				      easing: "swing"
				    });
				    return false;
				});
			});
		</script>

		<script>
			(function() {
				var bp = document.createElement('script');
				var curProtocol = window.location.protocol.split(':')[0];
				if(curProtocol === 'https') {
					bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
				} else {
					bp.src = 'http://push.zhanzhang.baidu.com/push.js';
				}
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(bp, s);
			})();
		</script>

		
	</body>

</html>
