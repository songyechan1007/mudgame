package org.syc.service;

import java.util.ArrayList;

import org.syc.dto.InventoryDTO;

public interface InventoryService {
	public void addInventory(InventoryDTO idto);
	public ArrayList<InventoryDTO> selectInventory(String id);
}
