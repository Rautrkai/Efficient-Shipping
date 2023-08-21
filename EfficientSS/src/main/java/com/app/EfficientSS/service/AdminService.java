package com.app.EfficientSS.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.EfficientSS.beans.Admin;

public interface AdminService {

	Admin validateAdmin(Admin admin);

	List<Admin> getAdmin();

	ResponseEntity<Object> blockCustomer(int cust_id);

}
