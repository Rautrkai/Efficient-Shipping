package com.app.EfficientSS.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.rsocket.server.RSocketServer.Transport;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.EfficientSS.beans.Auction_Item;
import com.app.EfficientSS.beans.Bidder;
import com.app.EfficientSS.beans.Customer;
import com.app.EfficientSS.beans.Item_Details;
import com.app.EfficientSS.beans.Transporter;
import com.app.EfficientSS.dao.AuctionItemDao;
import com.app.EfficientSS.dao.BidderDao;
import com.app.EfficientSS.dao.CustomerDao;
import com.app.EfficientSS.dao.ItemDao;
import com.app.EfficientSS.dao.TransporterDao;
import java.util.*;

@Service
public class BidderServiceImpl implements BidderService {

	
	@Autowired
	private BidderDao  bdao;
	
	@Autowired
	private CustomerDao customerdao;
	
	@Autowired
	private ItemDao itemDao;
	@Autowired
    private TransporterDao tdao;
	@Autowired 
	AuctionItemDao adao;

	@Override
	public ResponseEntity<Bidder> setBidderNoAuction(long t_id, int item_id, int cust_id, double price) {
		
	try {
		Bidder bidder=new Bidder();
		Transporter trans=tdao.getById(t_id);
		Customer cust=customerdao.getById(cust_id);
		Item_Details item=itemDao.findByItemId(item_id);
		System.out.println(item.getItem_Id());
		item.setOperation_status("Direct Booked");
		bidder.setB_name(trans.getT_full_name());
		bidder.setB_ph_no(trans.getT_ph_no());
		bidder.setB_price(price);												
		bidder.setB_selection_status("Selected");
		
		bidder.setTransporter(trans);
		bdao.save(bidder);
		
		List<Bidder> b1=new ArrayList<Bidder>();
		List<Customer> c1=new ArrayList<Customer>();
		List<Item_Details> i1=new ArrayList<Item_Details>();
		
		b1.add(bidder);
		c1.add(cust);
		i1.add(item);
		
		cust.setBidder(b1);
		bidder.setCustomer(c1);
		
		item.setBidder(b1);
		bidder.setItem_detail(i1);
		
		Bidder bid=bdao.save(bidder);
		customerdao.save(cust);
		itemDao.save(item);
		
		return new ResponseEntity<>(bid,HttpStatus.CREATED);
	} catch (Exception e) {
		return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	}
	}

	@Override
	public ResponseEntity<List<Bidder>> HistoryDirectBidder() {
			
		try {
			
			List<Item_Details> idetail=itemDao.findAll();

			List<Bidder> bidder= new ArrayList<Bidder>();
			
			List<Bidder> selectedbidder= new ArrayList<Bidder>();
			
			for (Item_Details i: idetail) {
				if(i.getOperation_status().equalsIgnoreCase("Direct Booked")) {
					 List<Bidder> bid=i.getBidder();
					 for(Bidder b:bid) {
						 bidder.add(b);
					 }
				}
			}
			
			for (Bidder a: bidder) {
				if(a.getB_selection_status().equalsIgnoreCase("Selected")) {
					selectedbidder.add(a);
				}
			}
			System.out.println(selectedbidder);
			return new ResponseEntity<>(selectedbidder,HttpStatus.OK);
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
			
		}

	@Override
	public List<Bidder> ListofSelcetedandUnselectedBids(long id) {
		Optional <Transporter> trans= tdao.findById(id);
		if(trans.isPresent()) {
			Transporter T=	trans.get();
			List<Bidder> Bid=T.getBidder();
			System.out.println(Bid);
			return Bid;}
		else
			return null;
		}

	@Override
	public List<Auction_Item> getAuctionItems(int c_id) {
			
			List<Auction_Item> auction_Items = adao.findByCustomerId(c_id);

			if (auction_Items !=null) {
				return auction_Items;
			}
		else 	
		return null;
	}

	@Override
	public Bidder updateBidder(int b_id, int a_id) {
		try {
			Optional<Bidder> oldBidder = bdao.findById(b_id);
			
			Optional<Auction_Item> oldAuctionItem = adao.findById(a_id);
			
			if(oldAuctionItem.isPresent())
			{
				Auction_Item newAuctionItem=oldAuctionItem.get();
				newAuctionItem.setA_item_status("Transporter Selected");;
				
				adao.save(newAuctionItem);
			}
			System.out.println("hhhh");
			if(oldBidder.isPresent())
			{
				Bidder newBidder=oldBidder.get();
				newBidder.setB_selection_status("Selected");
				
				
				return bdao.save(newBidder);
			}
			else
				return null;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
	
		

}
