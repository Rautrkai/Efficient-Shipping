package com.app.EfficientSS.service;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.EfficientSS.beans.Admin;
import com.app.EfficientSS.beans.Customer;
import com.app.EfficientSS.beans.Feedback;
import com.app.EfficientSS.dao.AdminDao;
import com.app.EfficientSS.dao.CustomerDao;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminDao  adminDao; 
	
	@Autowired
	CustomerDao customerDao;  
	
	@Override
	public Admin validateAdmin(Admin admin) {
		return adminDao.findByEmail(admin.getAdmin_email_id());
		
	}

	@Override
	public List<Admin> getAdmin() {
		// TODO Auto-generated method stub
		return adminDao.findAll();
	}

	
	
	@Override
	public ResponseEntity<Object> blockCustomer(int cust_id) {
		
		try {
			Customer cust=customerDao.getById(cust_id);
			if(cust !=null)
			{
				if(cust.getCust_blacklist().equalsIgnoreCase("clear"))
					cust.setCust_blacklist("block");
				else if(cust.getCust_blacklist().equalsIgnoreCase("block"))
					cust.setCust_blacklist("clear");
			}
			customerDao.save(cust);
		return new ResponseEntity<>(HttpStatus.CREATED);
	} catch (Exception e) {
		
		return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	}
	}
	
}
