package it.skinmanage.controller;

import it.skinmanage.model.News;
import it.skinmanage.model.User;
import it.skinmanage.pageModel.DataGrid;
import it.skinmanage.pageModel.Json;
import it.skinmanage.pageModel.PageHelper;
import it.skinmanage.service.NewsService;
import it.skinmanage.service.UserService;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
@RequestMapping("/home/news")
public class newsController extends BaseController {
	
	@Autowired
	private NewsService newsService;
	
	/**
	 * 跳转用户管理界面
	 * @return
	 */
	@RequestMapping(value="/newsManage",method = RequestMethod.GET)
	public String show() {
		return "/jsp/news/list";
	}
	/**
	 * 跳转增加新闻界面
	 * 
	 * @return
	 */
	@RequestMapping(value="/addNewsPage")
	public String addNewsPage() {
		return "/jsp/news/addNewsPage";
	}
	
	/**
	 * 跳转编辑新闻界面
	 * 
	 * @return
	 */
	@RequestMapping(value="/editNewsPage")
	public String editNewsPage(HttpServletRequest request,String id) {
		News news = newsService.getById(id);
		request.setAttribute("news", news);
		return "/jsp/news/editNewsPage";
	}
	
	/**修改用户*/
	@ResponseBody
	@RequestMapping(value="/editNews")
	public Json editNews(News news) {
		int result = newsService.updateNews(news);
		Json j = new Json();
		if(result == 1) {
			j.setMsg("修改新闻成功");
			j.setSuccess(true);
		} else {
			j.setMsg("修改新闻失败");
			j.setSuccess(false);
		}
		return j;
	}
	
	/**增加新闻*/
	@ResponseBody
	@RequestMapping(value="/add")
	public Json addUser(News news) {
		news.setPostTime(new Date());
		int result = newsService.addNews(news);
		Json json = new Json();
		if(result == 1) {
			json.setMsg("添加新闻成功");
			json.setSuccess(true);
		} else {
			json.setMsg("添加新闻失败");
			json.setSuccess(false);
		}
		return json;
	}
	
	/**
	 * 分页显示新闻
	 * @param pg
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value="/getAllNews")
	public DataGrid getAllNews(PageHelper pg) {
		return newsService.getAllNews(pg);
	}
	
	/**删除用户*/
	@ResponseBody
	@RequestMapping(value="/deleteNews")
	public Json deleteNews(String id) {
		int result = newsService.deleteById(id);
		Json json = new Json();
		if(result == 1) {
			json.setMsg("新闻删除成功");
			json.setSuccess(true);
		} else {
			json.setMsg("新闻删除失败");
			json.setSuccess(false);
		}
		return json;
	}
	
	/**
	 * 批量删除新闻
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
					newsService.deleteById(id);
				}
			}
			
		}
		j.setMsg("批量删除成功！");
		j.setSuccess(true);
		return j;
	}
	
}
