package it.skinmanage.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import it.skinmanage.mapper.NewsDao;
import it.skinmanage.model.News;
import it.skinmanage.model.User;
import it.skinmanage.pageModel.DataGrid;
import it.skinmanage.pageModel.PageHelper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NewsService {
	
	@Autowired
	private NewsDao newsDao;

	public int addNews(News news) {
		return newsDao.addNews(news);
	}

	/**
	 * 分页显示新闻
	 * @param pg
	 * @return
	 */
	public DataGrid getAllNews(PageHelper pg) {
		DataGrid dg = new DataGrid();
		int page = pg.getPage();
		int rows = pg.getRows();
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("pageSize", rows);   //页面的大小
		map.put("curRow",(page-1)*rows);  //当前记录数
		List<News> news = newsDao.getNews(map);
		for(News n : news){
//			n.setPostTime(postTime);
		}
		dg.setRows(news);    //设置数据
		dg.setTotal(Long.valueOf(newsDao.getAllNewsNumbers()));   //设置数据表格记录数
		return dg;
	}

	/**
	 * 修改新闻
	 * @param news
	 * @return
	 */
	public int updateNews(News news) {
		// TODO Auto-generated method stub
		return 0;
	}

	/**
	 * 获取新闻信息
	 * @param id
	 * @return
	 */
	public News getById(String id) {
		// TODO Auto-generated method stub
		return null;
	}

}
