package org.syc.service;

import java.util.ArrayList;

import org.syc.dto.ItemDTO;

public interface ItemService {
	public ArrayList<ItemDTO> itemList();
	public ItemDTO goBuyItemInfo(String id);
}
