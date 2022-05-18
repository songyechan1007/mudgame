package org.syc.controller;


import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.syc.dto.PlayerDTO;
import org.syc.service.PlayerService;

@Controller
public class PlayerController {
	@Autowired
	PlayerService pservice;
	@RequestMapping(value="/createPlayer/{sessionGetId}",method=RequestMethod.PUT, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> createPlayer(@PathVariable("sessionGetId")String sessionGetId){
		pservice.createPlayer(sessionGetId);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value="/createPlayer2",method=RequestMethod.POST, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> createPlayer2 (@RequestBody PlayerDTO pdto){
		pservice.createPlayer2(pdto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value="/playerInfo",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<PlayerDTO> playerInfo (String id){
		System.out.println(id);
	    return new ResponseEntity<>(pservice.playerInfo(id),HttpStatus.OK);
	}
	@RequestMapping(value="/playerUpdate",method=RequestMethod.PUT, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> playerUpdate (@RequestBody PlayerDTO pdto){
		pservice.playerUpdate(pdto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value="/stateUpdate",method=RequestMethod.PUT, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> stateUpdate (@RequestBody PlayerDTO pdto){
		pservice.stateUpdate(pdto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value="/buyUpdate",method=RequestMethod.PUT, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> buyUpdate (@RequestBody PlayerDTO pdto){
		pservice.buyUpdate(pdto);
		System.out.println(pdto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value="/showLanking",method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity <ArrayList<PlayerDTO>> showLanking (){
	    return new ResponseEntity<>(pservice.showLanking(),HttpStatus.OK);
	}
	
	@RequestMapping(value ="/member/removePlayer/{id}",method=RequestMethod.DELETE, produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> removePlayer(@PathVariable("id") String id) {
		pservice.removePlayer(id);
		return new ResponseEntity<>("success",HttpStatus.OK);
	}
	

}
