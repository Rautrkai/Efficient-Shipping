package com.app.EfficientSS.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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
public class AuctionItemSerivceImpl implements AuctionItemSerivce{

	@Autowired
	private BidderDao  bdao;
	
	@Autowired 
	AuctionItemDao adao;
	@Autowired
    private TransporterDao Transporterdao;
	
	@Autowired
	private CustomerDao customerdao;
	
	
	@Autowired
	private ItemDao itemDao;
	

	@Override
	public void saveAuctionItem(Auction_Item auction_item, int cust_id, int item_Id) {
			
			try {
				
				Customer cust=customerdao.getById(cust_id);
				auction_item.setCustomer(cust);
				System.out.println(item_Id);
				Item_Details idetail=itemDao.findByItemId(item_Id);
				idetail.setOperation_status("Goes for Auction");
				auction_item.setItem_detail(idetail);
				
				auction_item.setA_item_status("Running");
				auction_item.setTimer("Counting");
				
				Auction_Item aItem=adao.save(auction_item);
			
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}
	}

	@Override
	public List<Auction_Item> getAuctionItem(int c_id) {
		List<Auction_Item> auctionItem = adao.findByCustomerId(c_id);

		if (auctionItem.isEmpty()) {
			return null;
		} else {
			return auctionItem;
		}
	}

	@Override
	public Bidder updateBidder(int b_id, int a_item_id) {
		try {
			Optional<Bidder> oldBidder = bdao.findById(b_id);
			
			Optional<Auction_Item> oldAuctionItem = adao.findById(a_item_id);
			
			if(oldAuctionItem.isPresent())
			{
				Auction_Item newAuctionItem=oldAuctionItem.get();
				newAuctionItem.setA_item_status("Transporter Selected");;
				
				adao.save(newAuctionItem);
			}
			System.out.println("jhnjhb");
			if(oldBidder.isPresent())
			{
				Bidder newBidder=oldBidder.get();
				newBidder.setB_selection_status("Selected");
				
				
				return bdao.save(newBidder);
			}
			else
				return null;
		} catch (Exception e) {
			
			System.out.println(e.getMessage());
			return null;
		}
	}

	



	@Override
	public void setBidderAuction(long t_id, int a_item_id, int c_id, String price) {
		try {
			
			Bidder bidder = new Bidder();
			Transporter transporter=Transporterdao.getById(t_id);
			Customer cust1=customerdao.getById(c_id);								//no need of customer id it should be taken from item_details table
			Auction_Item aucItem=adao.getById(a_item_id);
			aucItem.setA_item_status("Got Bid");
			Item_Details item1=itemDao.findByItemId(aucItem.getItem_detail().getItem_Id());
			
			bidder.setB_name(transporter.getT_full_name());
			bidder.setB_ph_no(transporter.getT_ph_no());
			
			int rs=Integer.parseInt(price);
			bidder.setB_price(rs);												
			bidder.setB_selection_status("Not Selected");
			

			
			bidder.setTransporter(transporter);
			bdao.save(bidder);
			

			
			List<Bidder> b1=new ArrayList<Bidder>();
			List<Customer> c1=new ArrayList<Customer>();
			List<Item_Details> i1=new ArrayList<Item_Details>();
			List<Auction_Item> a1=new ArrayList<Auction_Item>();
			
			b1.add(bidder);
			c1.add(cust1);
			i1.add(item1);
			a1.add(aucItem);
			
			cust1.setBidder(b1);
			bidder.setCustomer(c1);
			
			item1.setBidder(b1);
			bidder.setItem_detail(i1);
			
			aucItem.setBidder(b1);
			bidder.setAuction_item(a1);
			
			bdao.save(bidder);
			customerdao.save(cust1);
			itemDao.save(item1);
			adao.save(aucItem);
	}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
	}

	@Override
	public List<Bidder> getAuctionItemBidderList(int id) {

		Auction_Item a=adao.getById(id);
		List<Bidder>b=a.getBidder();
		
		System.out.println(b);

		if (b.isEmpty()) {
			return null;
		} else {
			return b;
		}
		
	
	}

	@Override
	public ResponseEntity<List<Auction_Item>> listOfAuctionItems() {

		List<Auction_Item> auction_Items = adao.findAllRunning();

		if (auction_Items.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(auction_Items, HttpStatus.OK);
		}
	}
}
