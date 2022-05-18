package org.syc.dao;

import java.util.ArrayList;

import org.syc.dto.ItemDTO;

public interface ItemDao {
	public ArrayList<ItemDTO> itemList();
	public ItemDTO goBuyItemInfo(String id);
}
