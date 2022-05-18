package org.syc.dto;

public class ItemDTO {
	private int itemCode;
	private String itemName;
	private int itemPrice;
	private String itemCategory;
	private int itemStr;
	private int itemAmr;
	private int itemHp;
	private int itemUpgrade;
	private String itemDetail;
	
	public int getItemCode() {
		return itemCode;
	}

	public void setItemCode(int itemCode) {
		this.itemCode = itemCode;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public int getItemPrice() {
		return itemPrice;
	}

	public void setItemPrice(int itemPrice) {
		this.itemPrice = itemPrice;
	}

	public String getItemCategory() {
		return itemCategory;
	}

	public void setItemCategory(String itemCategory) {
		this.itemCategory = itemCategory;
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

	public int getItemUpgrade() {
		return itemUpgrade;
	}

	public void setItemUpgrade(int itemUpgrade) {
		this.itemUpgrade = itemUpgrade;
	}

	public String getItemDetail() {
		return itemDetail;
	}

	public void setItemDetail(String itemDetail) {
		this.itemDetail = itemDetail;
	}

	@Override
	public String toString() {
		return "ItemDTO [itemCode=" + itemCode + ", itemName=" + itemName + ", itemPrice=" + itemPrice
				+ ", itemCategory=" + itemCategory + ", itemStr=" + itemStr + ", itemAmr=" + itemAmr + ", itemHp="
				+ itemHp + ", itemUpgrade=" + itemUpgrade + ", itemDetail=" + itemDetail + "]";
	}
	
	
}
