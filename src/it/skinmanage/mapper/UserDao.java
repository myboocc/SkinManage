package it.skinmanage.mapper;

import it.skinmanage.model.User;

import java.util.List;
import java.util.Map;



public interface UserDao {
	
	/**增加用户*/
	public int addUser(User user);
	
	/**分页查找数据*/
	public List<User> getUsers(Map<String, Integer> map);
	
	/**查询所有用户记录总数*/
	public int getAllUsersNumbers();
	
	/**查询用户名是否存在*/
	public User checkUsername(User user);
	
	/**根据用户id删除用户*/
	public int deleteUser(String id);
	
	/**根据用户id查找用户*/
	public User getUser(String id);
	
	/**修改用户*/
	public int updateUser(User user);

	/**登录*/
	public User login(User user);
	

}
