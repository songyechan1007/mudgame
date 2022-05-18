package org.syc.dao;

import java.util.ArrayList;

import org.syc.dto.MailDTO;

public interface MailDao {
	public ArrayList<MailDTO> receiveMailBoxGet(String id);
	public ArrayList<MailDTO> sendMailBoxGet(String id);
	public MailDTO receiveMailDetail(int mailNo);
	public MailDTO receiveSendMailDetail(int mailNo);
	public void readMail(int mailNo);
	public void readSendMail(int mailNo);
	public void deleteMail(int mailNo);
	public void deleteSendMail(int mailNo);
	public void sendMail(MailDTO mdto);
	public void sentMail(MailDTO mdto);
	public void readMailAll(String id);
	public void readSendMailAll(String id);
}
