package org.syc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.syc.dao.MonsterDao;
import org.syc.dto.MonsterDTO;
@Service
public class MonsterServiceImpl implements MonsterService{
	@Autowired
		MonsterDao mdao;
	public MonsterDTO monsterInfo(String code) {
		return mdao.monsterInfo(code);
	}
}
