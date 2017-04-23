package it.skinmanage.mapper;

import it.skinmanage.model.News;
import it.skinmanage.model.User;

import java.util.List;
import java.util.Map;

public interface NewsDao {
	
	/**增加用户*/
	public int addNews(News news);
	
	/**分页查找数据*/
	public List<News> getNews(Map<String, Object> map);
	
	/**查询所有新闻记录总数*/
	public int getAllNewsNumbers();
	
	/**查询用户名是否存在*/
	public User checkUsername(User user);
	
	/**根据用户id删除用户*/
	public int deleteUser(String id);
	
	/**根据用户id查找新闻*/
	public News getById(String id);
	
	/**修改新闻*/
	public int updateNews(News news);

	/**删除新闻*/
	public int deleteById(String id);


	

}
