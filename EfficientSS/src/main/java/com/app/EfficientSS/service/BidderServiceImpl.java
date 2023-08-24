package com.app.EfficientSS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.EfficientSS.beans.Bidder;
import com.app.EfficientSS.beans.Customer;
import com.app.EfficientSS.beans.Item_Details;
import com.app.EfficientSS.beans.Transporter;
import com.app.EfficientSS.dao.AdminDao;
import com.app.EfficientSS.dao.BidderDao;
import com.app.EfficientSS.dao.CustomerDao;
import com.app.EfficientSS.dao.ItemDao;
import com.app.EfficientSS.dao.TransporterDao;
import java.util.*;

@Service
public class BidderServiceImpl implements BidderService{

	@Autowired
	private BidderDao  bdao; 
	
	@Autowired
    private TransporterDao Transporterdao;
	@Autowired
	private CustomerDao customerdao;
	@Autowired
	private ItemDao itemDao;
	
	@Override
	public ResponseEntity<Bidder> setBidderNoAuction(long t_id, int item_Id, int cust_id, double price) {
		try {
			Bidder bidder = new Bidder();
			
			Transporter transporter=Transporterdao.getById(t_id);
			Customer cust1=customerdao.getById(cust_id);
			Item_Details item1=itemDao.findByItemId(item_Id);
			item1.setOperation_status("Direct Booked");
			bidder.setB_name(transporter.getT_full_name());
			bidder.setB_ph_no(transporter.getT_ph_no());
			bidder.setB_price(price);												
			bidder.setB_selection_status("Selected");
			bidder.setTransporter(transporter);
			bdao.save(bidder);
			
			//Many to Many
			List<Bidder> b1=new ArrayList<Bidder>();
			List<Customer> c1=new ArrayList<Customer>();
			List<Item_Details> i1=new ArrayList<Item_Details>();
			
			b1.add(bidder);
			c1.add(cust1);
			i1.add(item1);
			
			cust1.setBidders(b1);
			bidder.setCustomers(c1);
			
			item1.setBidder(b1);
			bidder.setItem_detail(i1);
			
			Bidder bid=bdao.save(bidder);
			customerdao.save(cust1);
			itemDao.save(item1);
			
			return new ResponseEntity<>(bid,HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
}
