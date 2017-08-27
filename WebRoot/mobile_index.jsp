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
		<link rel="shortcut icon" href="images/favicon.ico" />
		<meta name = "format-detection" content = "telephone=no">
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<title>BLING LADY 专业皮肤管理</title>
		<link rel="stylesheet" type="text/css" href="css/reset.css"/>
		<link rel="stylesheet" type="text/css" href="css/mobile_index.css"/>
		<link rel="stylesheet" type="text/css" href="css/news.css"/>
		<link rel="stylesheet" type="text/css" href="css/hvr_hang.css"/>
		<link rel="stylesheet" type="text/css" href="css/idangerous.swiper.css"/>
		<script type="text/javascript">
			if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				window.location = "index.jsp";
			}
	    	function cc(){
				var winWidths= window.innerWidth;
				if(winWidths>=700){
					document.write('<meta name="viewport" content="width=640,user-scalable=no">');
				}
	    	}
	    	cc();
	    </script>
	    <script src="jslib/jquery-1.8.3.js"></script>
	    <script src="js/news.js" type="text/javascript" charset="utf-8"></script>
	</head>

	<body>
		<div id="active_wrap">
			<div class="top-wrap">
				<ul class="top-nav">
					<li>
						<img src="images/mobile/logo.png"/>
					</li>
					<li>
						<a class="topLink" href="#thinking">品牌理念</a>
					</li>
					<li>
						<a class="topLink" href="#trainproject">培训项目</a>
					</li>
					<li>
						<a class="topLink" href="#join-content">加盟政策</a>
					</li>
					<li>
						<a class="topLink" href="#storeShow">实体展示</a>
					</li>
					<li>
						<a href="javascript:;">在线咨询</a>
					</li>
					<li>
						<img class="hvr-hang" src="images/mobile/arrow.png"/>
					</li>
				</ul>
			</div>
			
			<div class="middle-content">
				<div id="thinking">
					<img src="images/mobile/thinking.jpg" />
				</div>
				<div id="trainproject">
					<img src="images/mobile/project.jpg"/>
				</div>
			</div>
			<!-- 项目培训 -->
			<div class="project-content clear">
				<ul id="da-thumbs" class="da-thumbs">
					<li>
						<img src="images/trainproject/trainproject_01.jpg"/>
						<div><span>雪花焕肤</span></div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_02.jpg"/>
						<div><span>MTS皮肤管理</span></div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_03.jpg"/>
						<div><span>小气泡深层清洁</span></div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_04.jpg"/>
						<div><span>黄金焕肤</span></div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_05.jpg"/>
						<div><span>海藻矽针焕肤</span></div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_06.jpg"/>
						<div><span>新娘管理</span></div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_07.jpg"/>
						<div><span>樱花焕肤</span></div>
					</li>
					<li>
						<img src="images/trainproject/trainproject_08.jpg"/>
						<div><span>韩国半永久</span></div>
					</li>
				</ul>
			</div>
			
			<div class="download-content">
				<p>MORE</p>
				<a href="user/download?fileName=BLINGLADY_JoinManual.pdf"><img src="images/downloadicon.png"/></a>
			</div>
			
			<div class="join-content" id="join-content">
				<img src="images/mobile/youshi.jpg"/>
				<ul>
					<li class="clear">
						<span class="title">统一品牌形象</span>
						<span class="content">整套VIS设计，后续VIS相关物料总部会以成本价提供给加盟商，为给加盟商省时省力</span>
					</li>
					<li>
						<span class="title">提供专业培训</span>
						<span class="content">加盟商可选择优秀店长，技师参与公司长期提供的国外或国内免费进修</span>
					</li>
					<li>
						<span class="title">专属渠道</span>
						<span class="content">独家签约美容协会会长，享受本机构购买仪器及产品的专属渠道</span>
					</li>
					<li>
						<span class="title">资源共享</span>
						<span class="content">共享BLING LADY旗下所有资源，B&L团队及产品资源，优质微商品牌，产品代购，直邮等</span>
					</li>
					<li>
						<span class="title">宣传推广扶持</span>
						<span class="content">提供可持续发展的品牌营销推广政策，促进终端销量，为广大加盟商解决后顾之忧</span>
					</li>
					<li class="clear">
						<span class="title">“新店活动”支持</span>
						<span class="content">新店加盟享专属“新店活动”支持让您开店就有生意</span>
					</li>
					<li>
						<span class="title">整店输出模式</span>
						<span class="content">全程协助选址、设计、装修，全程协助住店经营指导</span>
					</li>
					<li>
						<span class="title">会员增值服务</span>
						<span class="content">会员尊享海外体验，如有赴出国美容项目将提供接机，酒店预约，行程规划安排等增值服务</span>
					</li>
					<li>
						<span class="title">特别续航支持</span>
						<span class="content">总部资深皮肤管理技师亲自到店操作</span>
					</li>
					<li>
						<span class="title">鼓励政策</span>
						<span class="content">优秀加盟店奖励，出国考察，免费旅游或同等值物质奖励</span>
					</li>
				</ul>
				<img src="images/mobile/6youshi.jpg"/>
				<img src="images/mobile/huanjing.jpg"/>
			</div>
			
			<div class="download-joinMaum">
				<p>MORE</p>
				<a href="user/download?fileName=BLINGLADY_JoinManual.pdf">点击下载加盟手册</a>
				<p style="margin-top: 5px;"><img src="images/downloadicon.png"/></p>
			</div>
			
			<div class="email-content" id="email-content">
				<h1>发送您的加盟信息给我们</h1>
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
							<p>发送成功后，将会有工作人员与您取得联系，请您耐心等待，感谢您对BLING LADY的支持与信任</p>
						</div>
					</div>
				</form>
			</div>
			
			<div class="store-show" id="storeShow">
				<img src="images/mobile/storeShow.jpg"/>
			</div>
			
			<div class="showPic-wrap">
				<a class="arrow-left" href="#"></a> 
			    <a class="arrow-right" href="#"></a>
		    	<!--南京-->
			    <div class="swiper-container swiper1" id="nanjing">
			        <div class="swiper-wrapper">
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/nj-1.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/nj-2.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/nj-3.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/nj-4.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/nj-5.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/nj-6.jpg"> 
				        </div>
			        </div>
			    </div>
		    	<!--山东-->
			    <div class="swiper-container swiper2" id="shandong">
			        <div class="swiper-wrapper">
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/sd-1.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/sd-2.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/sd-3.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/sd-4.jpg"> 
				        </div>
			        </div>
			    </div>
		        <!--天津-->
			    <div class="swiper-container swiper3" id="tianjin">
			        <div class="swiper-wrapper">
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/tj-1.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/tj-2.jpg"> 
				        </div>
				        <div class="swiper-slide"> 
				        	<img src="images/mobile/storeShow/tj-3.jpg"> 
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
						<li style="width: 20%;"><img src="images/mobile/footer-logo.png" style="vertical-align: middle;width: 100%;"/></li>
						<li class="third-li">
							<ul class="footer-nav-wrap">
								<li><a href="javascript:;">网站首页</a></li>
								<li><a href="javascript:;">品牌理念</a></li>
								<li><a href="javascript:;">培训项目</a></li>
								<li><a href="javascript:;">加盟政策</a></li>
							</ul>
							<ul class="footer-nav-wrap2">
								<li style="padding-top: 10%;"><a href="javascript:;">实体展示</a></li>
								<li style="padding-top: 21%;"><a href="javascript:;">联系我们</a></li>
							</ul>
							
						</li>
						
						<li style="width: 40%;border-right: 0;padding-left: 2%;">
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
					<h2>BLING LADY 专业皮肤管理中心</h2>
					<h2 style="font-size: 12px;margin-top: 2%;">苏ICP备15051990号-2</h2>
				</div>
			</div>
			
		</div>
		
		<script src="js/idangerous.swiper.min.js"></script>
		<script type="text/javascript">
			$(function(){
				$(".top-wrap").css('height',$(window).height());
				
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
				$(".city-choice ul li").on('touchend',function(){
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
				
				$("a.topLink").click(function() {
				    $("html, body").animate({
				      scrollTop: $($(this).attr("href")).offset().top + "px"
				    }, {
				      duration: 500,
				      easing: "swing"
				    });
				    return false;
				});
				
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
			})
		</script>
	</body>
</html>