package com.app.EfficientSS.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.EfficientSS.beans.Auction_Item;
import com.app.EfficientSS.beans.Bidder;

public interface BidderService {

	ResponseEntity<Bidder> setBidderNoAuction(long t_id, int item_id, int cust_id, double price);

	ResponseEntity<List<Bidder>> HistoryDirectBidder();

	List<Bidder> ListofSelcetedandUnselectedBids(long id);

	List<Auction_Item> getAuctionItems(int c_id);

	Bidder updateBidder(int b_id, int a_id);

}
