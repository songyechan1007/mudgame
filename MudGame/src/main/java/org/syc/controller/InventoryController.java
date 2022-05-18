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
import org.syc.dto.InventoryDTO;
import org.syc.service.InventoryService;
import org.syc.service.ItemService;

@Controller
public class InventoryController {
	@Autowired
	InventoryService iservice;
	@Autowired
	ItemService itservice;
	@RequestMapping(value="/addInventory", method=RequestMethod.POST, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> addInventory(@RequestBody InventoryDTO idto){
		System.out.println(idto);
		iservice.addInventory(idto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value="/selectInventory/{id}", method=RequestMethod.GET, produces= {MediaType.APPLICATION_JSON_UTF8_VALUE})
	//requestbody : 비동기식인지 알려준다
	public ResponseEntity <ArrayList<InventoryDTO>> selectInventory(@PathVariable("id")String id) {
		System.out.println(iservice.selectInventory(id));
		return new ResponseEntity<>(iservice.selectInventory(id),HttpStatus.OK);
	}
	
	
}
