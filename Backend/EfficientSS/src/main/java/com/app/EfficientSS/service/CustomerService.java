package com.app.EfficientSS.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.EfficientSS.beans.Customer;

public interface CustomerService {

	ResponseEntity<List<Customer>> getAllCustomer();

	ResponseEntity<String> CustomerRegistration(Customer customer);

	void updateCustomer(Customer customer);

	Customer getCustomerById(int cid);

	void deleteCustomerById(int cid);

	Customer validateCustomer(Customer cust);

	

	

}
