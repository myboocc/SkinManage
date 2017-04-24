package it.skinmanage.interceptor;

import it.skinmanage.model.User;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class CheckPrivilegeInterceptor implements HandlerInterceptor{

	@Override
	public void afterCompletion(HttpServletRequest arg0,
			HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
		System.out.println("执行了  afterCompletion");
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1,
			Object arg2, ModelAndView arg3) throws Exception {
		System.out.println("执行了  postHandle");
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object arg2) throws Exception {
		System.out.println("执行了  preHandle");
		request.setCharacterEncoding("utf-8");
		User user = (User) request.getSession().getAttribute("loginUser"); //当前登录用户 
		//如果未登录 转到登陆界面
		if(user == null){
			//如果是登陆，就放行
			request.getRequestDispatcher("/WEB-INF/jsp/admin/login.jsp").forward(request, response);
			return false;
		}
		//如果已登录
		return true;
	}

}
