package org.syc.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;
import org.syc.dto.PlayerDTO;

public interface PlayerService {
	public void createPlayer(String sessionGetId);
	public void createPlayer2(PlayerDTO mdto);
	public void playerUpdate(PlayerDTO mdto);
	public void stateUpdate(PlayerDTO mdto);
	public void buyUpdate(PlayerDTO pdto);
	public PlayerDTO playerInfo(String id);
	public ArrayList<PlayerDTO> showLanking();
	public void removePlayer(String id);
}
