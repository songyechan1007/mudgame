package org.syc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.syc.dto.MonsterDTO;
import org.syc.service.MonsterService;
@Controller
public class MonsterController {
	@Autowired
	MonsterService mservice;
	@RequestMapping(value="/monsterInfo",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<MonsterDTO> monsterInfo (String code){
		System.out.println(code);
	    return new ResponseEntity<>(mservice.monsterInfo(code),HttpStatus.OK);
	}

}
