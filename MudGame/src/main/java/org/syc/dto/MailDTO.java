package org.syc.dto;

public class MailDTO {
	private int mailNo;
	private String sendId;
	private String title;
	private String content;
	private String receiveId;
	private String regdate;
	private int isRead;
	
	public int getMailNo() {
		return mailNo;
	}

	public void setMailNo(int mailNo) {
		this.mailNo = mailNo;
	}

	public String getSendId() {
		return sendId;
	}

	public void setSendId(String sendId) {
		this.sendId = sendId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getReceiveId() {
		return receiveId;
	}

	public void setReceiveId(String receiveId) {
		this.receiveId = receiveId;
	}

	public String getRegdate() {
		return regdate;
	}

	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}

	public int getIsRead() {
		return isRead;
	}

	public void setIsRead(int isRead) {
		this.isRead = isRead;
	}

	@Override
	public String toString() {
		return "MailDTO [mailNo=" + mailNo + ", sendId=" + sendId + ", title=" + title + ", content=" + content
				+ ", receiveId=" + receiveId + ", regdate=" + regdate + ", isRead=" + isRead + "]";
	}
	
	
	
}
