package com.app.EfficientSS.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.app.EfficientSS.beans.Auction_Item;
import com.app.EfficientSS.beans.Item_Details;

public interface ItemService {

	ResponseEntity<HttpStatus> saveitem(Item_Details itemdetail, int cust_id);

	List<Item_Details> getAllItem(int id);

	List<Item_Details> getAllItemsForCustomer(int cust_id);

	void startMethod();


}
