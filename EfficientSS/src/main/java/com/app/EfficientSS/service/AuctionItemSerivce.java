package com.app.EfficientSS.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.EfficientSS.beans.Auction_Item;
import com.app.EfficientSS.beans.Bidder;

public interface AuctionItemSerivce {

	void saveAuctionItem(Auction_Item auction_item, int cust_id, int item_Id);

	List<Auction_Item> getAuctionItem(int c_id);

	Bidder updateBidder(int b_id, int a_item_id);

	

	void setBidderAuction(long t_id, int a_item_id, int c_id, String price);

	List<Bidder> getAuctionItemBidderList(int id);

	ResponseEntity<List<Auction_Item>> listOfAuctionItems();



}
