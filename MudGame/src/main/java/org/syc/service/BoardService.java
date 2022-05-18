package org.syc.service;

import java.util.ArrayList;

import org.syc.dto.BoardDTO;
import org.syc.dto.Criteria;
import org.syc.dto.ReplyDTO;

public interface BoardService {
	public ArrayList<BoardDTO> freeBoard(Criteria cri);
	public int getTotalCount(Criteria cri);
	public void freeBoardWrite(BoardDTO bdto);
	public BoardDTO freeBoardDetailGet(int bno);
	public BoardDTO freeBoardModifyGet(int bno);
	public void freeboardMoidfyUpdate(BoardDTO bdto);
	public void freeBoardRemove(int bno);
	public ArrayList<ReplyDTO> freeBoardDetailReply(int bno);
	public void replyWrite(ReplyDTO rdto);
	public ReplyDTO freeBoardReplyGet(int rNo);
	public void freeBoardReplyModify(ReplyDTO rdto);
	public void freeBoardReplyRemove(int rNo);
	public void freeBoardDetailPut(int bno);
}
