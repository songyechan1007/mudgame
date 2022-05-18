package org.syc.dto;

public class MonsterDTO {
	String code;
	String name;
	String hp;
	String str;
	String amr;
	String gold;
	String exp;
	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getHp() {
		return hp;
	}


	public void setHp(String hp) {
		this.hp = hp;
	}


	public String getStr() {
		return str;
	}


	public void setStr(String str) {
		this.str = str;
	}


	public String getAmr() {
		return amr;
	}


	public void setAmr(String amr) {
		this.amr = amr;
	}


	public String getGold() {
		return gold;
	}


	public void setGold(String gold) {
		this.gold = gold;
	}


	public String getExp() {
		return exp;
	}


	public void setExp(String exp) {
		this.exp = exp;
	}


	@Override
	public String toString() {
		return "MonsterDTO [code=" + code + ", name=" + name + ", hp=" + hp + ", str=" + str + ", amr=" + amr
				+ ", gold=" + gold + ", exp=" + exp + "]";
	}
	
}
