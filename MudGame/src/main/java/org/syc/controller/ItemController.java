package org.syc.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.syc.dto.ItemDTO;
import org.syc.service.ItemService;

@Controller
public class ItemController {
	@Autowired
	ItemService iservice;
	@RequestMapping(value="/itemList", method=RequestMethod.GET, produces= {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_UTF8_VALUE})
	//requestbody : 비동기식인지 알려준다
	public ResponseEntity<ArrayList<ItemDTO>> itemList() {
		
		return new ResponseEntity<>(iservice.itemList(),HttpStatus.OK);
	}
	
	@RequestMapping(value="/goBuyItemInfo/{id}", method=RequestMethod.GET, produces= {MediaType.APPLICATION_JSON_UTF8_VALUE})
	//requestbody : 비동기식인지 알려준다
	public ResponseEntity<ItemDTO> goBuyItemInfo(@PathVariable("id")String id) {
		return new ResponseEntity<>(iservice.goBuyItemInfo(id),HttpStatus.OK);
	}
	
	
}
