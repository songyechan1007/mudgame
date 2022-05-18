package org.syc.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.syc.dao.InventoryDao;
import org.syc.dto.InventoryDTO;
@Service
public class InventoryServiceImpl implements InventoryService{
	@Autowired
	InventoryDao idao;
	@Override
	public void addInventory(InventoryDTO idto) {
		idao.addInventory(idto);
	}
	@Override
	public ArrayList<InventoryDTO> selectInventory(String id) {
		// TODO Auto-generated method stub
		return idao.selectInventory(id);
	}
	
}
