package com.app.EfficientSS.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.EfficientSS.beans.Customer;
import com.app.EfficientSS.beans.Feedback;
import com.app.EfficientSS.dao.CustomerDao;
import com.app.EfficientSS.dao.FeedbackDao;

@Service
public class FeedbackServiceImpl implements FeedbackService  {

	@Autowired
	private FeedbackDao feedbackDao;
	
	@Autowired
	private CustomerDao  customerDao;
	
	@Override
	public ResponseEntity<Object> registerCustFeedback(Feedback feedback, int cust_id) {
		
		try {
			Customer cust=customerDao.getById(cust_id);
			feedback.setCustomer(cust);
			
			feedback.setCust_Name(cust.getCust_fName()+" "+cust.getCust_mName()+" "+cust.getCust_lName());
			Feedback feedcomp=feedbackDao.save(feedback);

		return new ResponseEntity<>(feedcomp,HttpStatus.CREATED);
	} catch (Exception e) {
		
		return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
	}
	}
	

	@Override
	public List<Feedback> getAll() {
		
		return feedbackDao.findAll();
	}

}
