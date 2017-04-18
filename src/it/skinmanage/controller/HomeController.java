package it.skinmanage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController extends BaseController{
	
	@RequestMapping("/index")
	public String index(){
		return "jsp/home/index";
	}
	@RequestMapping("/north")
	public String north(){
		return "jsp/home/north";
	}
	@RequestMapping("/south")
	public String south(){
		return "jsp/home/south";
	}
	@RequestMapping("/west")
	public String west(){
		return "jsp/home/west";
	}
	@RequestMapping("/east")
	public String east(){
		return "jsp/home/east";
	}
	//切换版块儿
//	@RequestMapping("/{forum}")
//	public String changeForum(Model model,@PathVariable("forum") Long forum_name,HttpSession session){
//		if(forum_name == null){
//			forum_name = (long) 1;
//		}
//		Forum forum = forumService.getById(forum_name);
//		if(forum != null){
//			List<Forum> forumList = forumService.findAll();
//			model.addAttribute("forumList", forumList);
//			//保存活跃小组
//			Set<Group> groupList = forum.getGroups();
//			User loginUser = (User) session.getAttribute("loginUser");
//			if(loginUser != null){
//				//用户登陆了，查询出她加入了哪些小组
//				User user = userService.getById(loginUser.getId());
//				Set<Group> groups = user.getGroups();
//				for(Group oriGroup : groupList){
//					for(Group g : groups){
//						if(g.getId().equals(oriGroup.getId())){
//							oriGroup.setCanGo(true);
//						}
//					}
//				}
//			}
//			List<Group> activeGroupList = groupService.getByActiveGroup();
//			List<Group> newGroupList = groupService.getByNewGroup();
//			model.addAttribute("groupList", groupList);
//			model.addAttribute("activeGroupList", activeGroupList);
//			model.addAttribute("newGroupList", newGroupList);
//			model.addAttribute("forum_id", forum_name);
//			return "jsp/home/home";
//		}
//		return null;
//	}
	
	
	
}
