package org.syc.controller;



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
import org.syc.dto.MailDTO;
import org.syc.service.MailService;

@Controller
public class MailBox {
	@Autowired
	MailService mservice;
	@RequestMapping(value ="/mailBox/receiveMailBox",method=RequestMethod.GET)
	public void receiveMailBoxGet(String id, Model model) {
		model.addAttribute("receiveMail",mservice.receiveMailBoxGet(id));
		System.out.println(mservice.receiveMailBoxGet(id));
	}
	
	@RequestMapping(value ="/mailBox/receiveMailDetail/{mailNo}",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<MailDTO> receiveMailDetail(@PathVariable("mailNo") int mailNo) {
		System.out.println(mservice.receiveMailDetail(mailNo));
		return new ResponseEntity<>(mservice.receiveMailDetail(mailNo),HttpStatus.OK);
	}
	
	@RequestMapping(value ="/mailBox/receiveSendMailDetail/{mailNo}",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<MailDTO> receiveSendMailDetail(@PathVariable("mailNo") int mailNo) {
		System.out.println(mservice.receiveSendMailDetail(mailNo));
		return new ResponseEntity<>(mservice.receiveSendMailDetail(mailNo),HttpStatus.OK);
	}
	
	
	
	@RequestMapping(value ="/mailBox/readMail/{mailNo}",method=RequestMethod.PUT, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<String> readMail(@PathVariable("mailNo") int mailNo) {
		mservice.readMail(mailNo);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value ="/mailBox/readSendMail/{mailNo}",method=RequestMethod.PUT, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<String> readSendMail(@PathVariable("mailNo") int mailNo) {
		mservice.readSendMail(mailNo);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value ="/mailBox/deleteMail/{mailNo}",method=RequestMethod.DELETE, produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> deleteMail(@PathVariable("mailNo") int mailNo) {
		mservice.deleteMail(mailNo);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value ="/mailBox/deleteSendMail/{mailNo}",method=RequestMethod.DELETE, produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> deleteSendMail(@PathVariable("mailNo") int mailNo) {
		mservice.deleteSendMail(mailNo);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	
	
	@RequestMapping(value ="/mailBox/sendMailBox",method=RequestMethod.GET)
	public void sendMailBoxGet(String id, Model model) {
		model.addAttribute("sendMail",mservice.sendMailBoxGet(id));
	}
	
	
	@RequestMapping(value ="/mailBox/sendMail",method=RequestMethod.POST, produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> sendMail(@RequestBody MailDTO mdto) {
		mservice.sendMail(mdto);;
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	
	@RequestMapping(value ="/mailBox/sentMail",method=RequestMethod.POST, produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> sentMail(@RequestBody MailDTO mdto) {
		mservice.sentMail(mdto);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	
	
	
	@RequestMapping(value ="/mailBox/readMailAll/{id}",method=RequestMethod.PUT, produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> readMailAll(@PathVariable("id") String id) {
		mservice.readMailAll(id);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value ="/mailBox/readSendMailAll/{id}",method=RequestMethod.PUT, produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> readSendMailAll(@PathVariable("id") String id) {
		mservice.readSendMailAll(id);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	
	
	
	
	
}
