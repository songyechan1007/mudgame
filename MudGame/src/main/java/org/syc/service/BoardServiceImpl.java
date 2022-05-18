package org.syc.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.syc.dao.BoardDao;
import org.syc.dto.BoardDTO;
import org.syc.dto.Criteria;
import org.syc.dto.ReplyDTO;

@Service
public class BoardServiceImpl implements BoardService{
	@Autowired
	BoardDao bdao;
	@Override
	public ArrayList<BoardDTO> freeBoard(Criteria cri) {
		return bdao.freeBoard(cri);
	}
	@Override
	public int getTotalCount(Criteria cri) {
		return bdao.getTotalCount(cri);
	}
	@Override
	public void freeBoardWrite(BoardDTO bdto) {
		bdao.freeBoardWrite(bdto);
		
	}
	@Override
	public BoardDTO freeBoardDetailGet(int bno) {
		return bdao.freeBoardDetailGet(bno);
		
	}
	@Override
	public BoardDTO freeBoardModifyGet(int bno) {
		
		return bdao.freeBoardModifyGet(bno);
	}
	
	public void freeboardMoidfyUpdate(BoardDTO bdto) {
		bdao.freeboardMoidfyUpdate(bdto);
	}
	
	public void freeBoardRemove(int bno) {
		bdao.freeBoardRemove(bno);
	}
	@Override
	public ArrayList<ReplyDTO> freeBoardDetailReply(int bno) {
		return bdao.freeBoardDetailReply(bno);
	}
	
	public void replyWrite(ReplyDTO rdto) {
		bdao.replyWrite(rdto);
	}
	
	public ReplyDTO freeBoardReplyGet(int rNo) {
		return bdao.freeBoardReplyGet(rNo);
	}
	
	public void freeBoardReplyModify(ReplyDTO rdto) {
		bdao.freeBoardReplyModify(rdto);
	}
	
	public void freeBoardReplyRemove(int rNo) {
		bdao.freeBoardReplyRemove(rNo);
	}
	@Override
	public void freeBoardDetailPut(int bno) {
		bdao.freeBoardDetailPut(bno);	
	}

}
