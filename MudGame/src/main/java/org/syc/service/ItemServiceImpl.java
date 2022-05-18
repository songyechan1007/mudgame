package org.syc.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.syc.dao.ItemDao;
import org.syc.dto.ItemDTO;

@Service
public class ItemServiceImpl implements ItemService{
	@Autowired
	ItemDao idao;
	@Override
	public ArrayList<ItemDTO> itemList() {
		// TODO Auto-generated method stub
		return idao.itemList();
	}
	@Override
	public ItemDTO goBuyItemInfo(String id) {
		return idao.goBuyItemInfo(id);
	}

}
