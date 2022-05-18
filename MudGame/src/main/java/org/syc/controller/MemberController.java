package org.syc.controller;


import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.syc.dto.MemberDTO;
import org.syc.dto.PlayerDTO;
import org.syc.service.MemberService;

@Controller
public class MemberController {
	@Autowired
	MemberService mservice;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index() {
			
		return "index";
	}
	@RequestMapping(value="/join",method =RequestMethod.POST)
	public String memberJoin(MemberDTO mdto) {
		mservice.memberJoin(mdto);
		return "redirect:/";
	}
	
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public String memberLogin(MemberDTO mdto,HttpSession session) {
		String url="";
		if(mservice.memberLogin(mdto) != null) {
			session.setAttribute("session", mservice.memberLogin(mdto));
			return "redirect:/";
		}else {
			System.out.println("아이디 혹은 비밀번호가 일치하지 않습니다.");
			return "/loginError";
		}
	}
	
	
	@RequestMapping(value="/logout",method =RequestMethod.GET)
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/";
	}
	
	@RequestMapping(value="/idOverRapCheck/{id}",method=RequestMethod.GET, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> idOverRapCheck (@PathVariable("id")String id){
		if(mservice.idOverRapCheck(id)==null) {
			return new ResponseEntity<>("success",HttpStatus.OK);
		}else {
			return new ResponseEntity<>("false",HttpStatus.OK);
		}
	    
	}
	
	@RequestMapping(value="/member/mypage", method= RequestMethod.GET)
	public void mypageGet(HttpSession session, Model model) {
		MemberDTO mds = (MemberDTO)session.getAttribute("session");
		if(mds != null) {
			model.addAttribute("memberInfo",mds);
			
		}
	}
	
	@RequestMapping(value ="/member/removeMember/{id}",method=RequestMethod.DELETE, produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> removeMember(@PathVariable("id") String id) {
		mservice.removeMember(id);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value ="/member/updateHavePlayer/{id}",method=RequestMethod.PUT, produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> updateHavePlayer(@PathVariable("id") String id) {
		mservice.updateHavePlayer(id);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	
	
	
	
	
	
	
	
}
