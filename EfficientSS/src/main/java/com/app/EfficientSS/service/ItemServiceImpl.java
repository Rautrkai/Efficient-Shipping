package com.app.EfficientSS.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.EfficientSS.beans.Customer;
import com.app.EfficientSS.beans.Item_Details;
import com.app.EfficientSS.dao.CustomerDao;
import com.app.EfficientSS.dao.ItemDao;
import java.util.*;

@Service
public class ItemServiceImpl implements ItemService{

	@Autowired
	private ItemDao itemDao;

	@Autowired
	private CustomerDao Custdao;
	
	
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
	
}
