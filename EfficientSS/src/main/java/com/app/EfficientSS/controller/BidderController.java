package com.app.EfficientSS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.EfficientSS.beans.Bidder;
import com.app.EfficientSS.service.BidderService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BidderController {
	
	@Autowired
	private BidderService bidderService;
	
	
	
	@PostMapping("customer/bidder/{item_Id}")
	public ResponseEntity<Bidder> setBidder(@RequestParam long t_id,@RequestParam int cust_id,@RequestParam double price ,@PathVariable String item_Id){
		
		int item_id =Integer.parseInt(item_Id);
		return null;
		
//		return bidderService.setBidderNoAuction(t_id,item_id,cust_id,price);

	}


}
