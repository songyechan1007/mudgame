package org.syc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.syc.dao.BankDao;
import org.syc.dto.PlayerDTO;

@Service
public class BankServiceImpl implements BankService{
	@Autowired
	BankDao bdao;
	public void reciveMoney(PlayerDTO pdto) {
		bdao.reciveMoney(pdto);
	}
}
