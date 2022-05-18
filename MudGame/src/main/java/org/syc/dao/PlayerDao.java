package org.syc.dao;

import java.util.ArrayList;

import org.syc.dto.PlayerDTO;

public interface PlayerDao {
	public void createPlayer(String sessionGetId);
	public void createPlayer2(PlayerDTO pdto);
	public PlayerDTO playerInfo(String id);
	public void playerUpdate(PlayerDTO pdto);
	public void stateUpdate(PlayerDTO pdto);
	public void buyUpdate(PlayerDTO pdto);
	public ArrayList<PlayerDTO> showLanking();
	public void removePlayer(String id);
}
