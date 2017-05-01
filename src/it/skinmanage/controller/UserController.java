package it.skinmanage.controller;

import it.skinmanage.model.User;
import it.skinmanage.pageModel.DataGrid;
import it.skinmanage.pageModel.Json;
import it.skinmanage.pageModel.PageHelper;
import it.skinmanage.service.UserService;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


/**
 * 用户控制器
 * 
 * @author YMStudio
 */
@Controller
@RequestMapping("/home/user")
public class UserController extends BaseController {
	
	@Autowired
	private UserService userService;
	/**
	 * 用户登录
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/login",method = RequestMethod.POST)
	public String login(User user,HttpSession session) {
		User loginUser = userService.login(user);
		if(loginUser != null){
			session.setAttribute("loginUser", loginUser);
			return "/jsp/home/index";
		}
		return "/jsp/admin/login";
	}
	/**
	 * 用户登录
	 * @param user
	 * @return
	 */
	@RequestMapping(value="/logout",method = RequestMethod.GET)
	public String logout(HttpSession session) {
		session.invalidate();
		return "/jsp/admin/login";
	}
	
	/**
	 * 跳转用户管理界面
	 * @return
	 */
	@RequestMapping(value="/userManage",method = RequestMethod.GET)
	public String show() {
		return "/jsp/admin/user";
	}
	
	
	/**
	 * 分页显示用户
	 * @param pg
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/getAllUsers")
	public DataGrid getAllUser(PageHelper pg) {
		return userService.getAllUser(pg);
	}
	
	/**增加用户*/
	@ResponseBody
	@RequestMapping(value="/add")
	public Json addUser(User u) {
		int result = userService.addUser(u);
		Json json = new Json();
		if(result == 1) {
			json.setMsg("添加用户成功");
			json.setSuccess(true);
		} else {
			json.setMsg("添加用户失败");
			json.setSuccess(false);
		}
		return json;
	}
	
	
	/**
	 * 跳转增加用户界面
	 * 
	 * @return
	 */
	@RequestMapping(value="/addUserPage")
	public String addUserPage() {
		return "/jsp/admin/addUserPage";
	}
	
	
	/**
	 * 检查用户名是否存在
	 * 
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/checkUsername")
	public Json checkUsernameIsExist(User user) {
		User u = userService.checkUsername(user);
		Json j = new Json();
		if(u == null) {
			j.setMsg("恭喜您，用户名可以使用");
			j.setSuccess(true);
		} else {
			j.setMsg("很遗憾，用户名已经存在");
			j.setSuccess(false);
		}
		return j;
	}
	
	/**
	 * 批量删除用户
	 * @param ids
	 *  ids ('0','1','2')
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/batchDelete")
	public Json batchDelete(String ids) {
		Json j = new Json();
		if(ids != null && ids.length() > 0) {
			for (String id : ids.split(",")) {
				if (id != null) {
					userService.deleteUser(id);
				}
			}
			
		}
		j.setMsg("批量删除成功！");
		j.setSuccess(true);
		return j;
	}
	
	/**跳转到更改用户界面*/
	@RequestMapping(value="/editPage")
	public String editPage(HttpServletRequest request,String id) {
		User user = userService.getUser(id);
		request.setAttribute("user", user);
		return "/jsp/admin/editUserPage";
	}
	
	/**修改用户*/
	@ResponseBody
	@RequestMapping(value="/editUser")
	public Json editUser(User user) {
		int result = userService.updateUser(user);
		Json j = new Json();
		if(result == 1) {
			j.setMsg("修改用户成功");
			j.setSuccess(true);
		} else {
			j.setMsg("修改用户失败");
			j.setSuccess(false);
		}
		return j;
	}
	
	/**删除用户*/
	@ResponseBody
	@RequestMapping(value="/deleteUser")
	public Json deleteUser(String id) {
		int result = userService.deleteUser(id);
		Json json = new Json();
		if(result == 1) {
			json.setMsg("删除成功");
			json.setSuccess(true);
		} else {
			json.setMsg("删除失败");
			json.setSuccess(false);
		}
		return json;
	}
	
	
}
