package org.syc.controller;

import java.util.ArrayList;

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
import org.syc.dto.PageDTO;
import org.syc.dto.PlayerDTO;
import org.syc.dto.ReplyDTO;
import org.syc.service.BoardService;
import org.syc.dto.BoardDTO;
import org.syc.dto.Criteria;


@Controller
public class BoardController {
	@Autowired
	BoardService bservice;
	@RequestMapping(value ="/board/freeBoard", method=RequestMethod.GET)
	public void freeBoard(Model model, Criteria cri) {
		System.out.println(bservice.freeBoard(cri));
//		model.addAttribute(jsp로 데이터를 보내고자 하는 변수명, jsp로 데이터를 보내고자 하는 값)
		model.addAttribute("blist",bservice.freeBoard(cri));
		// boardList.jsp에 페이징 처리를 하기 위한 데이터를 boardList.jsp에 보내고자 함
		model.addAttribute("pageMaker",new PageDTO(cri,bservice.getTotalCount(cri)));
	}
	
	@RequestMapping(value ="/board/freeBoardWrite", method=RequestMethod.GET)
	public void freeBoardWriteGet() {
		
	}
	
	@RequestMapping(value="/board/freeBoardWrite",method=RequestMethod.POST, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> freeBoardWrite (@RequestBody BoardDTO bdto){
		bservice.freeBoardWrite(bdto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	@RequestMapping(value ="/board/freeBoardDetail", method=RequestMethod.GET)
	public void freeBoardDetailGet(int bno,Model model) {
		model.addAttribute("freeBoardDetail", bservice.freeBoardDetailGet(bno));
	}
	
	@RequestMapping(value ="/board/freeBoardDetail", method=RequestMethod.PUT, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> freeBoardDetailPut(@RequestBody int bno) {
		bservice.freeBoardDetailPut(bno);
		System.out.println(bno);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value ="/board/freeBoardModify", method=RequestMethod.GET)
	public void freeBoardModifyGet(int bno,Model model) {
		model.addAttribute("freeBoardModify", bservice.freeBoardModifyGet(bno));
	}
	
	@RequestMapping(value="/board/freeboardMoidfyUpdate",method=RequestMethod.PUT, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> freeboardMoidfyUpdate (@RequestBody BoardDTO bdto){
		bservice.freeboardMoidfyUpdate(bdto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value="/board/freeBoardRemove",method=RequestMethod.DELETE, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> freeBoardRemove (@RequestBody int bno){
		bservice.freeBoardRemove(bno);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	@RequestMapping(value="/board/freeBoardDetail/{bno}",method=RequestMethod.GET, consumes="application/json", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<ArrayList<ReplyDTO>> freeBoardDetailReply (@PathVariable("bno")int bno){
		System.out.println(bservice.freeBoardDetailReply(bno));
		System.out.println(bno);
	    return new ResponseEntity<>(bservice.freeBoardDetailReply(bno),HttpStatus.OK);
	}
	
	@RequestMapping(value="/board/replyWrite",method=RequestMethod.POST, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> replyWrite (@RequestBody ReplyDTO rdto){
		bservice.replyWrite(rdto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value="/board/freeBoardReplyGet/{rNo}",method=RequestMethod.GET, consumes="application/json", produces=MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<ReplyDTO> freeBoardReplyGet (@PathVariable("rNo")int rNo){
	    return new ResponseEntity<>(bservice.freeBoardReplyGet(rNo),HttpStatus.OK);
	}
	
	@RequestMapping(value="/board/freeBoardReplyModify",method=RequestMethod.PUT, consumes="application/json", produces= {MediaType.TEXT_PLAIN_VALUE})
	public ResponseEntity<String> freeBoardReplyModify (@RequestBody ReplyDTO rdto){
		bservice.freeBoardReplyModify(rdto);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value="/board/freeBoardReplyRemove/{rNo}",method=RequestMethod.DELETE, consumes="application/json", produces=MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> freeBoardReplyRemove (@PathVariable("rNo")int rNo){
		bservice.freeBoardReplyRemove(rNo);
	    return new ResponseEntity<>("success",HttpStatus.OK);
	}
	
	@RequestMapping(value ="/board/lank", method=RequestMethod.GET)
	public void showLank() {
	}
}
