package org.syc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.syc.dto.PlayerDTO;
import org.syc.service.BankService;

@Controller
public class BankController {
	@Autowired
	BankService bservice;
	@RequestMapping(value = "/bank/bank", method=RequestMethod.GET)
	public void bankGet() {	
	}
	
	@RequestMapping(value="/reciveMoney",method=RequestMethod.PUT, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> reciveMoney (@RequestBody PlayerDTO pdto){
		bservice.reciveMoney(pdto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
}
