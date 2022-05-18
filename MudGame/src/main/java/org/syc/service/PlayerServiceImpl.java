package org.syc.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.syc.dao.PlayerDao;
import org.syc.dto.PlayerDTO;
@Service
public class PlayerServiceImpl implements PlayerService{
	@Autowired
	PlayerDao pdao;
	@Override
	public void createPlayer(String sessionGetId) {
		pdao.createPlayer(sessionGetId);
	}
	@Override
	public void createPlayer2(PlayerDTO mdto) {
		pdao.createPlayer2(mdto);
	}
	@Override
	public PlayerDTO playerInfo(String id) {
		return pdao.playerInfo(id);
	}
	@Override
	public void playerUpdate(PlayerDTO pdto) {
		pdao.playerUpdate(pdto);
	}
	@Override
	public void stateUpdate(PlayerDTO pdto) {
		pdao.stateUpdate(pdto);
		
	}
	@Override
	public void buyUpdate(PlayerDTO pdto) {
		pdao.buyUpdate(pdto);
		
	}
	@Override
	public ArrayList<PlayerDTO> showLanking() {
		return pdao.showLanking();
	}
	public void removePlayer(String id) {
		pdao.removePlayer(id);
	}
	
	
	
	
}
