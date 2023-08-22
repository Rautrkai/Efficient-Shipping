package com.app.EfficientSS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.EfficientSS.beans.Admin;
import com.app.EfficientSS.service.AdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdminController {

	@Autowired
	private AdminService  adminService;
	
	@PostMapping("home/adminlogin")
	public ResponseEntity<Admin> validateAdmin(@RequestBody Admin admin)
	{
		System.out.println("request ali");
		System.out.println(admin);
		Admin admin1=adminService.validateAdmin(admin);
		System.out.println(admin1);
		if(admin1.getAdmin_email_id().equals(admin.getAdmin_email_id()) && admin.getAdmin_email_id().equals(admin1.getAdmin_email_id()))
			return new ResponseEntity<>(admin1,HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/admins")
	public ResponseEntity<List<Admin>> getAdmin()
	{
		List<Admin> alist= adminService.getAdmin();
		System.out.println(alist);

		return new ResponseEntity<>(alist,HttpStatus.OK);
		
	}
	
	
	@PutMapping("admin/customer/{cust_id}")
	public  ResponseEntity<String> changeStatus(@PathVariable int cust_id)
	{
		System.out.println("ali");
		adminService.blockCustomer(cust_id);
		return new ResponseEntity<>(HttpStatus.OK);	}
}
