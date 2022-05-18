package org.syc.dao;

import java.util.ArrayList;

import org.syc.dto.InventoryDTO;

public interface InventoryDao {
	public void addInventory(InventoryDTO idto);
	public ArrayList<InventoryDTO> selectInventory(String id);
}
