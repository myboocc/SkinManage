package it.skinmanage.service;

import it.skinmanage.mapper.UserDao;
import it.skinmanage.model.User;
import it.skinmanage.pageModel.DataGrid;
import it.skinmanage.pageModel.PageHelper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
	
	@Autowired
	private UserDao userDao;
	
	/**增加用户*/
	public int addUser(User user) {
		return userDao.addUser(user);
	}
	
	
	/**分页查找用户信息*/
	public DataGrid getAllUser(PageHelper pg) {
		DataGrid dg = new DataGrid();
		int page = pg.getPage();
		int rows = pg.getRows();
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("pageSize", rows);   //页面的大小
		map.put("curRow",(page-1)*rows);  //当前记录数
		List<User> users = userDao.getUsers(map);
		dg.setRows(users);    //设置数据
		dg.setTotal(Long.valueOf(userDao.getAllUsersNumbers()));   //设置数据表格记录数
		return dg;
	}
	
	/**查询用户名是否存在*/
	public User checkUsername(User user) {
		return userDao.checkUsername(user);
	}
	
	/**根据用户id删除用户*/
	public int deleteUser(String id) {
		return userDao.deleteUser(id);
	}
	
	/**根据用户id获得用户*/
	public User getUser(String id) {
		return userDao.getUser(id);
	}
	
	/**更新用户*/
	public int updateUser(User u) {
		return userDao.updateUser(u);
	}
}
