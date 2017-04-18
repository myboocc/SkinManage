<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="../inc.jsp"/>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/news/list.js"></script>
</head>
<body>
	<div>
		<table id="news">
			
		</table>
	</div>

	<div id="toolbar" style="display: none;">
		<a onclick="addNews();" href="javascript:void(0);" class="easyui-linkbutton" data-options="plain:true,iconCls:'pencil_add'">添加</a>
		<a onclick="batchDelete();" href="javascript:void(0);" class="easyui-linkbutton" data-options="plain:true,iconCls:'delete'">批量删除</a>
	</div>
	
</body>
</html>