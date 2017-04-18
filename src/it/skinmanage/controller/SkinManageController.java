package it.skinmanage.controller;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.MessageFormat;
import java.util.Properties;

import javax.mail.MessagingException;
import javax.mail.Session;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.json.JSONObject;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import cn.itcast.mail.Mail;
import cn.itcast.mail.MailUtils;

@Controller
@RequestMapping("/user")
public class SkinManageController{
	
	@RequestMapping(value="/sendEmail",method={RequestMethod.POST})
	public void register(HttpServletResponse response, HttpServletRequest request) throws Exception {
		PrintWriter out = response.getWriter();
		// 获取数据
		String name = request.getParameter("name");
		String age = request.getParameter("age");
		String city = request.getParameter("city");
		String phone = request.getParameter("phone");
		String wechat = request.getParameter("wechat");
		
		// 发送邮件
		Properties prop = new Properties();
		try {
			prop.load(this.getClass().getClassLoader().getResourceAsStream("email_template.properties"));
		} catch (IOException e1) {
			throw new RuntimeException(e1);
		}
		/*
		 * 登录邮件服务器，得到session
		 */
		String host = prop.getProperty("host");//服务器主机名
		String username = prop.getProperty("username");//登录名
		String pass = prop.getProperty("password");//登录密码
		Session session = MailUtils.createSession(host, username, pass);
		/*
		 * 创建Mail对象
		 */
		String from = prop.getProperty("from");
		String to = "583087977@qq.com";
		String subject = prop.getProperty("subject");
		String content = MessageFormat.format(prop.getProperty("content"), name,age,city,phone,wechat);
		Mail mail = new Mail(from, to, subject, content);
		/*
		 * 发送邮件
		 */
		try {
			MailUtils.send(session, mail);
		} catch (MessagingException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		System.out.println("发送成功");
		String json = "{'status':'ok','content':'成功'}";
    	JSONObject jsonObj = new JSONObject(json);
    	out.print(jsonObj);
		
	}
	
	@RequestMapping("download")    
    public ResponseEntity<byte[]> download(String fileName,HttpServletRequest request) throws IOException {    
        String path = request.getSession().getServletContext().getRealPath("files");
//        String fileName=new String("你好.xlsx".getBytes("UTF-8"),"iso-8859-1");//为了解决中文名称乱码问题  
        File file=new File(path + "\\" + fileName);  
        HttpHeaders headers = new HttpHeaders();    
        headers.setContentDispositionFormData("attachment", fileName);   
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);   
        return new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file),    
                                          headers, HttpStatus.CREATED);    
    }    
	
}
