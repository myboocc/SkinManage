package it.skinmanage.controller;

import java.io.File;

import it.skinmanage.qiniu.Base64Coder;
import it.skinmanage.qiniu.Config;
import it.skinmanage.qiniu.ListItem;
import it.skinmanage.qiniu.ListPrefixRet;
import it.skinmanage.qiniu.Mac;
import it.skinmanage.qiniu.RSFClient;
import it.skinmanage.qiniu.Uptoken;

import org.json.JSONObject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/qiniu")
public class QiNiuController {
	
	@RequestMapping("/QiNiuCallback")
	public void QiNiuCallback(HttpServletRequest request,HttpServletResponse response) throws Exception{
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		String upload_ret = request.getParameter("upload_ret");
		JSONObject callback = new JSONObject(Base64Coder.decode(upload_ret));
		JSONObject json = new JSONObject();
		if (callback.has("error")) {
			json.put("state", callback.get("error"));
		} else {
			json.put("original", callback.get("name"));
			json.put("url", callback.get("key")+"-v001");
			/* json.put("url", callback.get("key")); */
			json.put("state", "SUCCESS");
		}
		response.getWriter().print(json.toString());
	}
	
	@RequestMapping("/Uptoken")
	public void Uptoken(HttpServletRequest request,HttpServletResponse response) throws Exception{
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		response.setContentType("application/json");
		JSONObject json = new JSONObject();
		json.append("token", Uptoken.makeUptoken());
		response.getWriter().print(json.toString());
	}
	
	@RequestMapping("/imageManager")
	public void imageManager(HttpServletRequest request,HttpServletResponse response) throws Exception{
		Mac mac = new Mac(Config.ACCESS_KEY, Config.SECRET_KEY);
		RSFClient client = new RSFClient(mac);
		ListPrefixRet list = client.listPrifix("manzhiyanshequ", "", "", 10);
		StringBuffer sb = new StringBuffer();
		for (ListItem item : list.results) {
			sb.append("/");
			sb.append(item.key);
			sb.append("ue_separate_ue");
		}
		String imgStr = sb.toString();
		if (imgStr != "") {
			imgStr = imgStr
					.substring(0, imgStr.lastIndexOf("ue_separate_ue"))
					.replace(File.separator, "/").trim();
		}
		response.getWriter().print(imgStr);
	}
	
}
