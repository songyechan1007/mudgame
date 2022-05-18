package org.syc.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.syc.dao.MailDao;
import org.syc.dto.MailDTO;

@Service
public class MailServiceImpl implements MailService{
	@Autowired
	MailDao mdao;
	public ArrayList<MailDTO> receiveMailBoxGet(String id){
		return mdao.receiveMailBoxGet(id);
	}
	public MailDTO receiveMailDetail(int mailNo) {
		return mdao.receiveMailDetail(mailNo);
	}
	
	public void readMail(int mailNo) {
		mdao.readMail(mailNo);
	}
	
	public void deleteMail(int mailNo) {
		mdao.deleteMail(mailNo);
	}
	
	public ArrayList<MailDTO> sendMailBoxGet(String id){
		return mdao.sendMailBoxGet(id);
	}
	
	public void sendMail(MailDTO mdto) {
		mdao.sendMail(mdto);
	}
	
	public void sentMail(MailDTO mdto) {
		mdao.sentMail(mdto);
	}
	
	
	public void readMailAll(String id) {
		mdao.readMailAll(id);
	}
	@Override
	public MailDTO receiveSendMailDetail(int mailNo) {
		return mdao.receiveSendMailDetail(mailNo);
	}
	@Override
	public void readSendMail(int mailNo) {
		mdao.readSendMail(mailNo);
		
	}
	@Override
	public void deleteSendMail(int mailNo) {
		mdao.deleteSendMail(mailNo);
		
	}
	
	public void readSendMailAll(String id) {
		mdao.readSendMailAll(id);
	}
	
	
	
	
	
	
}
