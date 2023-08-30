package com.app.EfficientSS.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.EfficientSS.beans.Auction_Item;
import com.app.EfficientSS.beans.Customer;
import com.app.EfficientSS.beans.Item_Details;
import com.app.EfficientSS.dao.AdminDao;
import com.app.EfficientSS.dao.AuctionItemDao;
import com.app.EfficientSS.dao.CustomerDao;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.time.temporal.ChronoUnit;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import com.app.EfficientSS.dao.ItemDao;
import java.util.*;

@Service
public class ItemServiceImpl implements ItemService{

	@Autowired
	private ItemDao itemDao;

	@Autowired
	private CustomerDao Custdao;
	
	@Autowired
	AuctionItemDao  aDao; 
	
	//register item    
		public ResponseEntity<HttpStatus> saveitem(Item_Details itemdetail,int cust_id) {
			
			try {
				Customer cust=Custdao.getById(cust_id);  //retrive customer by id 
				itemdetail.setCustomer(cust);
				itemdetail.setOperation_status("Registered"); 
				System.out.println(itemdetail);
				itemDao.save(itemdetail);                    //register item
				return new ResponseEntity<>(HttpStatus.CREATED);
			} catch (Exception e) {
				System.out.println(e.getMessage());
				return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
			}
		}


		public List<Item_Details> getAllItemsForCustomer(int cust_id) {
			
			return itemDao.findByCustId(cust_id);
		}


		public List<Item_Details> getAllItem(int cust_id) {
			
			return itemDao.findByCustId(cust_id);
		}


//		@Override
//		public void startMethod() {
//			LocalDate localDate = LocalDate.now();
//
//			List<Auction_Item> alist=aDao.getAllAuctionItem();	
//			
//			if(alist.isEmpty()) {
//				//Do Nothing
//			}else {
//				
//				for(Auction_Item a: alist) 
//				{
//					try {
//					SimpleDateFormat formatter1=new SimpleDateFormat("yyyy-MM-dd");
//					
//						Date d1=formatter1.parse(a.getA_end_datetime());
//						int x=d1.getDate();
//						int y=localDate.getDayOfMonth();
//						System.out.println(x);
//						System.out.println(y);
//						int z=y-x;	//0 or positive			times up
//									//negative 				running
//						System.out.println(z);
//						if(z>=0) {
//							a.setTimer("Expired");
//							if(a.getA_item_status().equalsIgnoreCase("Running"))
//							{
//								a.setA_item_status("No bid");
//								
//							}
//							aDao.save(a);
//						}
//						
//					} catch (ParseException e) {
//						
//						e.printStackTrace();
//					}
//					
//				}
//			
//		}
//		}
		
		@Override
		public void startMethod() {
		    LocalDate localDate = LocalDate.now();
		    List<Auction_Item> alist = aDao.getAllAuctionItem();

		    if (alist.isEmpty()) {
		        // Do Nothing
		    } else {
		        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

		        for (Auction_Item a : alist) {
		            try {
		                LocalDate endDate = LocalDate.parse(a.getA_end_datetime(), formatter);
		                long daysDifference = ChronoUnit.DAYS.between(localDate, endDate);

		                if (daysDifference >= 0) {
		                    a.setTimer("Running");
		                } else {
		                    a.setTimer("Expired");
		                    if (a.getA_item_status().equalsIgnoreCase("Running")) {
		                        a.setA_item_status("No bid");
		                    }
		                    aDao.save(a);
		                }

		            } catch (DateTimeParseException e) {
		                e.printStackTrace();
		            }
		        }
		    }
		}


	
}
