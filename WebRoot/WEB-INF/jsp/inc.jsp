<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
 <!-- UEditor -->
 <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/jslib/ueditor/themes/default/css/ueditor.css"/>
 <script type="text/javascript" src="${pageContext.request.contextPath}/jslib/ueditor/ueditor.config.js"></script>
 <script type="text/javascript" src="${pageContext.request.contextPath}/jslib/ueditor/ueditor.all.js"></script>

 <script type="text/javascript" src="${pageContext.request.contextPath}/jslib/jquery-easyui-1.4.2/jquery.min.js"></script>
 <link id="easyuiTheme" rel="stylesheet" href="${pageContext.request.contextPath}/jslib/jquery-easyui-1.4.2/themes/<c:out value="${cookie.easyuiThemeName.value}" default="bootstrap"/>/easyui.css" type="text/css">
 <script type="text/javascript" src="${pageContext.request.contextPath}/jslib/jquery-easyui-1.4.2/jquery.easyui.min.js"></script>
 <script type="text/javascript" src="${pageContext.request.contextPath}/jslib/extEasyUI.js"></script>
 <script type="text/javascript" src="${pageContext.request.contextPath}/jslib/jquery-easyui-1.4.2/locale/easyui-lang-zh_CN.js"></script>
 <link rel="stylesheet" href="${pageContext.request.contextPath}/jslib/jquery-easyui-1.4.2/themes/icon.css" type="text/css"></link>
 <script type="text/javascript" src="${pageContext.request.contextPath}/jslib/extEasyUI.js"></script>
 <script type="text/javascript" src="${pageContext.request.contextPath}/jslib/extJquery.js"></script>
 <link rel="stylesheet" href="${pageContext.request.contextPath}/style/extEasyUIIcon.css" type="text/css"></link>
 
 <!-- 初始化参数 -->
 <script type="text/javascript">
	var basePath = "${pageContext.request.contextPath}/home";
	var serverUrl = "${pageContext.request.contextPath}";
 </script>
</head>
<body>

</body>
</html>