
var dataGrid;
$(function() {
	dataGrid = $('#news').datagrid({
		url: basePath + '/news/getAllNews',
		nowrap : true,
		idField : 'id',
		pagination : true,
		frozenColumns : [ [ {
			field : 'id',
			title : '编号',
			width : 150,
			checkbox : true
		}]],
		 columns:[[
   			 {field:'title',title:'标题',width:300,align:'center'},
    		 {field:'postTime',title:'创建时间',width:200,align:'center',
    		 	formatter:function(val,rec){
                	return jsonTimeStamp(val);
                }
             },
    		 {
				field : 'action',
				title : '操作',
				width : 100,
				align:'center',
				formatter : function(value, row, index) {
					var str = '';
						str += $.formatString('<img onclick="editFun(\'{0}\');" src="{1}" title="编辑"/>', row.id, serverUrl + '/style/images/extjs_icons/pencil.png');
					str += '&nbsp;';
						str += $.formatString('<img onclick="deleteFun(\'{0}\');" src="{1}" title="删除"/>', row.id, serverUrl + '/style/images/extjs_icons/cancel.png');
					return str;
				}
			} 
		]],
		toolbar : '#toolbar',
	})
});
/**添加新闻*/
function addNews() {
	parent.$.modalDialog({
		title : '添加新闻',
		width : 750,
		href : basePath + '/news/addNewsPage',
		height : 550,
		buttons : [{
			text : '保存',
			align:'center',
			iconCls : 'icon-add',
			handler : function() {
				parent.$.modalDialog.openner_dataGrid = dataGrid;//因为添加成功之后，需要刷新这个dataGrid，所以先预定义好
				var f = parent.$.modalDialog.handler.find('#form');
				f.submit();
			}
		}, 
		{
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				parent.$.modalDialog.handler.dialog('destroy');
				parent.$.modalDialog.handler = undefined;
			}
		}]
	});
	
}

/**批量删除*/
function batchDelete() {
	var rows = dataGrid.datagrid('getChecked');
	var ids = [];
	if (rows.length > 0) {
		parent.$.messager.confirm('确认', '您是否要删除当前选中的项目？', function(r) {
			if(r) {
				parent.$.messager.progress({
					title : '提示',
					text : '数据处理中，请稍后....'
				});
				for ( var i = 0; i < rows.length; i++) {
					ids.push(rows[i].id);
				}
				$.ajax({
				type: "POST",
				url: basePath + "/user/batchDelete",
				dataType:"json",
				data:{
					ids : ids.join(',')
				},
				success: function(j) {
 					if(j.success == true) {
 						dataGrid.datagrid('load');
						dataGrid.datagrid('uncheckAll').datagrid('unselectAll').datagrid('clearSelections');
						parent.$.messager.alert('提示', result.msg, 'info');
						
 					} else {
 						parent.$.messager.alert('错误', '删除失败', 'error');
 						
 					}
 				
			}
			});
				parent.$.messager.progress('close');	
			}
		})
	} else {
		parent.$.messager.show({
			title : '提示',
			msg : '请勾选要删除的记录！'
		});
	}
}

/**修改新闻*/
function editFun(id) {
	if (id == undefined) {
		var rows = dataGrid.datagrid('getSelections');
		id = rows[0].id;
	} else {
		dataGrid.datagrid('unselectAll').datagrid('uncheckAll');
	}
	parent.$.modalDialog({
		title : '编辑新闻',
		width : 750,
		height : 550,
		href : basePath + '/news/editNewsPage?id=' + id,
		buttons : [ {
			text : '保存',
			iconCls : 'icon-add',
			handler : function() {
				parent.$.modalDialog.openner_dataGrid = dataGrid;//因为添加成功之后，需要刷新这个dataGrid，所以先预定义好
				var f = parent.$.modalDialog.handler.find('#form');
				f.submit();
			}
		}, 
		{
			text : '取消',
			iconCls : 'icon-cancel',
			handler : function() {
				parent.$.modalDialog.handler.dialog('destroy');
				parent.$.modalDialog.handler = undefined;
			}
		}]
	});
}

/**删除用户*/
function deleteFun(id) {
	if (id == undefined) {//点击右键菜单才会触发这个
		var rows = dataGrid.datagrid('getSelections');
		id = rows[0].id;
	} else {//点击操作里面的删除图标会触发这个
		dataGrid.datagrid('unselectAll').datagrid('uncheckAll');
	}
	parent.$.messager.confirm('询问', '您是否要删除该条新闻？', function(b) {
		if (b) {
			parent.$.messager.progress({
				title : '提示',
				text : '数据处理中，请稍后....'
			});
			$.ajax({
   				type: "POST",
   				url: basePath + "/news/deleteNews",
   				dataType:"json",
   				data:{"id":id},
   				success: function(j){
     				if(j.success == true) {
   						$.messager.show({
							title:'操作正确',
							msg:j.msg,
							timeout:2000,
							showType:'slide'
					});
					dataGrid.datagrid('reload');
     				} else {
     					parent.$.messager.alert('提示', j.msg, 'error');
     				}
   				}
			});
			parent.$.messager.progress('close');	
			} else {
				parent.$.messager.show({
					title : '提示',
					msg : '取消删除'
				});
			}
	});
}

//时间转换
function jsonTimeStamp(milliseconds) {
    if (milliseconds != "" && milliseconds != null
            && milliseconds != "null") {
        var datetime = new Date();
        datetime.setTime(milliseconds);
        var year = datetime.getFullYear();
        var month = datetime.getMonth() + 1 < 10 ? "0"
                + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var date = datetime.getDate() < 10 ? "0" + datetime.getDate()
                : datetime.getDate();
        var hour = datetime.getHours() < 10 ? "0" + datetime.getHours()
                : datetime.getHours();
        var minute = datetime.getMinutes() < 10 ? "0"
                + datetime.getMinutes() : datetime.getMinutes();
        var second = datetime.getSeconds() < 10 ? "0"
                + datetime.getSeconds() : datetime.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute
                + ":" + second;
    } else {
        return "";
    }
 
}