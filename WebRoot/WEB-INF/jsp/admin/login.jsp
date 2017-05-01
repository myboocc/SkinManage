<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>欢迎登录-BLING LADY后台管理系统</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="BLING LADY">
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/jslib/jquery-easyui-1.4.2/themes/icon.css"/>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/jslib/jquery-easyui-1.4.2/themes/gray/easyui.css"/>
	<style type="text/css">
		*{margin: 0;}
	</style>
  </head>
  
  <body>
  	<div style="margin-top: 15%;text-align: center;padding: 40px;background: #baa675">BLING LADY皮肤管理连锁机构</div>
    <div id="loginWin" class="easyui-window" title="登录" style="width:350px;height:188px;padding:5px;"
	   minimizable="false" maximizable="false" resizable="false" collapsible="false">
	    <div class="easyui-layout" fit="true">
           	<div region="center" border="false" style="padding:5px;background:#fff;border:1px solid #ccc;">
		        <form id="loginForm" method="post" action="home/user/login">
		            <div style="padding:5px 0;">
		                <label for="login">帐号:</label>
		                <input type="text" name="username" style="width:260px;"></input>
		            </div>
		            <div style="padding:5px 0;">
		                <label for="password">密码:</label>
		                <input type="password" name="password" style="width:260px;"></input>
		            </div>
		             <div style="padding:5px 0;text-align: center;color: red;" id="showMsg"></div>
		        </form>
            </div>
            <div region="south" border="false" style="text-align:right;padding:5px 0;">
                <a class="easyui-linkbutton" iconCls="icon-ok" href="javascript:void(0)" onclick="login()">登录</a>
                <a class="easyui-linkbutton" iconCls="icon-cancel" href="javascript:void(0)" onclick="cleardata()">重置</a>
            </div>
	    </div>
	</div>
  </body>
	<script type="text/javascript" src="${pageContext.request.contextPath}/jslib/jquery-easyui-1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/jslib/jquery-easyui-1.4.2/jquery.easyui.min.js"></script>
	<script type="text/javascript">
		document.onkeydown = function(e){
		    var event = e || window.event;  
		    var code = event.keyCode || event.which || event.charCode;
		    if (code == 13) {
		        login();
		    }
		}
		$(function(){
		    $("input[name='login']").focus();
		});
		function cleardata(){
		    $('#loginForm').form('clear');
		}
		function login(){
		    if($("input[name='username']").val()=="" || $("input[name='password']").val()==""){
		         $("#showMsg").html("用户名或密码为空，请输入");
		         $("input[name='username']").focus();
		    }else{
		    	$('#loginForm').submit();
	           //ajax异步提交  
	           /* $.ajax({            
	                  type:"POST",   //post提交方式默认是get
	                  url: basePath + "/user/login", 
	                  data:$("#loginForm").serialize(),   //序列化              
	                  success:function(data) {
	                      document.location = "user/";
	                  }, 
	                  error:function(request) {      // 设置表单提交出错                 
	                      $("#showMsg").html(request);  //登录错误提示信息
	                  }
	                              
	            });  */      
	        } 
		}
	</script>
</html>
