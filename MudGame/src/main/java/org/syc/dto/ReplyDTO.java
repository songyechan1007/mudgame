package org.syc.dto;

public class ReplyDTO {
	private int rNo;
	private String rId;
	private String rContent;
	private String regdate;
	private int bno;
	
	public int getrNo() {
		return rNo;
	}

	public void setrNo(int rNo) {
		this.rNo = rNo;
	}

	public String getrId() {
		return rId;
	}

	public void setrId(String rId) {
		this.rId = rId;
	}

	public String getrContent() {
		return rContent;
	}

	public void setrContent(String rContent) {
		this.rContent = rContent;
	}

	public String getRegdate() {
		return regdate;
	}

	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}

	public int getBno() {
		return bno;
	}

	public void setBno(int bno) {
		this.bno = bno;
	}

	@Override
	public String toString() {
		return "ReplyDTO [rNo=" + rNo + ", rId=" + rId + ", rContent=" + rContent + ", regdate=" + regdate + ", bno="
				+ bno + "]";
	}
	
}
