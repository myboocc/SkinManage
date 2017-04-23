<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script type="text/javascript">
$(function() {
		parent.$.messager.progress('close');
		$('#form').form({
			url : basePath + '/news/editNews',
			onSubmit : function() {
				parent.$.messager.progress({
					title : '提示',
					text : '数据处理中，请稍后....'
				});
				var content = UE.getEditor('content').getContent();
				var result = true;
				if(content == '') {
					parent.$.messager.progress('close');
					$.messager.alert('错误','文章标题或内容不能为空!','error');
					result = false;
				}
				return result;
			},
			success : function(result) {
				parent.$.messager.progress('close');
				result = $.parseJSON(result);
				if (result.success) {
					parent.$.modalDialog.openner_dataGrid.datagrid('reload');//之所以能在这里调用到parent.$.modalDialog.openner_dataGrid这个对象，是因为user.jsp页面预定义好了
					parent.$.modalDialog.handler.dialog('close');
					$.messager.show({
						title:'操作正确',
						msg:result.msg,
						timeout:2000,
						showType:'slide'
					});
				} else {
					parent.$.messager.alert('错误', result.msg, 'error');
				}
			}
		});
	});
	
</script>
<div class="easyui-layout" data-options="fit:true,border:false">
	<div data-options="region:'center',border:false" title="" style="overflow: hidden;padding: 10px 0 10px 10px;">
		<form id="form" method="post">
			<input type="hidden" value="${news.id }" name="id"/>
			<table class="table table-hover table-condensed">
				<tr>
					<th>标题:</th>
					<td><input id="title" type="text" name="title" type="text" value="${news.title }" />  <span id="usernameTip" style="color: red"></span> </td>
				</tr>
				<tr>
					<th>内容:</th>
					<td>
						<input type="hidden" value="${news.content }" id="tempContent"/>
						<!--编辑器-->
						<div style="width:100%;margin:20px auto 40px;">
							<script type="text/plain" id="content" name="content" style="width:90%;height:350px;"></script>
						</div>
						<script type="text/javascript">
							UE.delEditor('content');
					        var ue = UE.getEditor('content',{scaleEnabled:true, initialContent: $("#tempContent").val()});
					   </script>
					</td>
				</tr>
				
				
			</table>
		</form>
		
		<!-- <div style="text-align:center;padding:5px">
	    	<a href="javascript:void(0)" class="easyui-linkbutton" onclick="submitForm()">Submit</a>
	    	<a href="javascript:void(0)" class="easyui-linkbutton" onclick="clearForm()">Clear</a>
	    </div> -->
	</div>
</div>