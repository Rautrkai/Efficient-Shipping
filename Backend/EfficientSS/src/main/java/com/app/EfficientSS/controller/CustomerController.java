package com.app.EfficientSS.controller;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.EfficientSS.beans.Customer;
import com.app.EfficientSS.service.CustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@GetMapping("admin/customer")
	public ResponseEntity<List<Customer>> getAllCustomer()
	{
		return customerService.getAllCustomer();
	}
	
	@PostMapping("home/customer")
	public ResponseEntity<String> CustomerRegistration(@RequestBody Customer customer)
	{
		System.out.println(customer);
		return customerService.CustomerRegistration(customer);
	}
	
	@PutMapping("/customer/{cid}")
	public ResponseEntity<String> editCustomer(@RequestBody Customer customer)
	{
		customerService.updateCustomer(customer);
		return ResponseEntity.ok("updated successfully");
	}
	

	@GetMapping("/customer/{cid}")
	public ResponseEntity<Customer> getCustomerById(@PathVariable("cid") int cid)
	{
		Customer cust=customerService.getCustomerById(cid);
		if(cust!=null) {
		   return ResponseEntity.ok(cust);
		}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	@DeleteMapping("customer/{cid}")
	public ResponseEntity<String> deleteCustomerById(@PathVariable("cid") int cid)
	{
		customerService.deleteCustomerById(cid);
			return ResponseEntity.ok("deleted");
	
	}
	
	@PostMapping("home/custlogin")
	public ResponseEntity<Customer>  validateCustomer(@RequestBody Customer cust)
	{
		
		Customer customer=customerService.validateCustomer(cust);
		
		if(customer!=null)
			return new ResponseEntity<>(customer,HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
