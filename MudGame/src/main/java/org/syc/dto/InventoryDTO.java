package org.syc.dto;

public class InventoryDTO{
	private String id;
	private int itemCode;
	private String playerId;
	private int itemNo;
	private int itemStr;
	private int itemAmr;
	private int itemHp;
	private String itemName;
	
	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public int getItemStr() {
		return itemStr;
	}

	public void setItemStr(int itemStr) {
		this.itemStr = itemStr;
	}

	public int getItemAmr() {
		return itemAmr;
	}

	public void setItemAmr(int itemAmr) {
		this.itemAmr = itemAmr;
	}

	public int getItemHp() {
		return itemHp;
	}

	public void setItemHp(int itemHp) {
		this.itemHp = itemHp;
	}

	public int getItemNo() {
		return itemNo;
	}

	public void setItemNo(int itemNo) {
		this.itemNo = itemNo;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getItemCode() {
		return itemCode;
	}

	public void setItemCode(int itemCode) {
		this.itemCode = itemCode;
	}

	public String getPlayerId() {
		return playerId;
	}

	public void setPlayerId(String playerId) {
		this.playerId = playerId;
	}

	
	@Override
	public String toString() {
		return "InventoryDTO [id=" + id + ", itemCode=" + itemCode + ", playerId=" + playerId + ", itemNo=" + itemNo
				+ ", itemStr=" + itemStr + ", itemAmr=" + itemAmr + ", itemHp=" + itemHp + ", itemName=" + itemName
				+ "]";
	}
	
}
