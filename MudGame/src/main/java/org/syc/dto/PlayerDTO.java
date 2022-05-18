package org.syc.dto;

public class PlayerDTO {
	private String brood;
	private String id;
	private String playerId;
	private int level;
	private String camp;
	private String job;
	private float exp;
	private float maxExp;
	private int gold;
	private int hp;
	private int str;
	private int amr;
	private int statePoint;
	

	public int getStatePoint() {
		return statePoint;
	}

	public void setStatePoint(int statePoint) {
		this.statePoint = statePoint;
	}

	public int getHp() {
		return hp;
	}

	public void setHp(int hp) {
		this.hp = hp;
	}

	public int getStr() {
		return str;
	}

	public void setStr(int str) {
		this.str = str;
	}

	public int getAmr() {
		return amr;
	}

	public void setAmr(int amr) {
		this.amr = amr;
	}

	public int getGold() {
		return gold;
	}

	public void setGold(int gold) {
		this.gold = gold;
	}

	public String getPlayerId() {
		return playerId;
	}

	public void setPlayerId(String playerId) {
		this.playerId = playerId;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public String getCamp() {
		return camp;
	}

	public void setCamp(String camp) {
		this.camp = camp;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public float getExp() {
		return exp;
	}

	public void setExp(float exp) {
		this.exp = exp;
	}

	public float getMaxExp() {
		return maxExp;
	}

	public void setMaxExp(float maxExp) {
		this.maxExp = maxExp;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBrood() {
		return brood;
	}

	public void setBrood(String brood) {
		this.brood = brood;
	}

	



	@Override
	public String toString() {
		return "PlayerDTO [brood=" + brood + ", id=" + id + ", playerId=" + playerId + ", level=" + level + ", camp="
				+ camp + ", job=" + job + ", exp=" + exp + ", maxExp=" + maxExp + ", gold=" + gold + ", hp=" + hp
				+ ", str=" + str + ", amr=" + amr + ", statePoint=" + statePoint + "]";
	}
	
}
