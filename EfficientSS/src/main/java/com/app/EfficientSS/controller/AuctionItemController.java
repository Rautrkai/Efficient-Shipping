package com.app.EfficientSS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.EfficientSS.beans.Auction_Item;
import com.app.EfficientSS.beans.Bidder;
import com.app.EfficientSS.service.AuctionItemSerivce;
import com.app.EfficientSS.service.ItemService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuctionItemController {

	@Autowired
	private AuctionItemSerivce aservice;
	@Autowired
	ItemService itemService;

	@PostMapping("customer/auctionitem")
	public ResponseEntity<String> AddAuctionItem(@RequestBody Auction_Item auction_item,@RequestParam int cust_id,@RequestParam int item_Id){
		
		aservice.saveAuctionItem(auction_item,cust_id,item_Id);
		System.out.println("fd");
		return ResponseEntity.ok("updated successfully");	}


	@GetMapping("customer/auctionitem/{cust_id}")
	public ResponseEntity<List<Auction_Item>> listOfAuctionItem(@PathVariable("cust_id") int c_id) {		//Customer_id
		
		itemService.startMethod();
		List<Auction_Item> alist =aservice.getAuctionItem(c_id);
		if(alist!=null) {
			   return ResponseEntity.ok(alist);
			}
			else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
		
	
	}
	
	@PutMapping("customer/bidder/{b_id}/{a_item_id}")
	public ResponseEntity<Bidder> BidderSelection(@PathVariable("b_id") int b_id,@PathVariable("a_item_id") int a_item_id){
		
		Bidder b=aservice.updateBidder(b_id,a_item_id);
		if(b!=null) {
			   return ResponseEntity.ok(b);
			}
			else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			}
		
	}
	
	
	@GetMapping("transporter/auctionitem")
	public ResponseEntity<List<Auction_Item>> Auction_ItemList(){
System.out.println("sadsada");
		itemService.startMethod();
		
		return aservice.listOfAuctionItems();
		
	}
	
	@PostMapping("transporter/bidder")
	public ResponseEntity<String> setBidder(@RequestParam long t_id,@RequestParam int a_item_id,@RequestParam int cust_id,@RequestParam String price){
		aservice.setBidderAuction(t_id,a_item_id,cust_id,price);
		return ResponseEntity.ok("updated successfully");
		}

	@GetMapping("customer/auctionitembidder/{a_item_id}")
	public ResponseEntity<List<Bidder>> listOfAuctionItemBidder(@PathVariable("a_item_id") int a_item_id){					//Auction_item_id
		List<Bidder> blist= aservice.getAuctionItemBidderList(a_item_id);
		if(blist!=null) {
			   return ResponseEntity.ok(blist);
			}
			else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			} 
	}
	}



