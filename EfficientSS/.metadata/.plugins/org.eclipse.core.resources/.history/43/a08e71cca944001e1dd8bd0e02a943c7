package com.app.EfficientSS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.EfficientSS.beans.Item_Details;
import com.app.EfficientSS.beans.Transporter;
import com.app.EfficientSS.service.TransporterService;



@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class TransporterController {
	
    @Autowired
    private TransporterService transporterService;
    
    @PostMapping("home/transporter")
    public ResponseEntity<String> createTransporter(@RequestBody Transporter transporter) {
    	System.out.println(transporter);
        transporterService.createTransporter(transporter);
        return new ResponseEntity<>("created", HttpStatus.CREATED);
    }
    
    @GetMapping("transporter/{t_id}")
    public ResponseEntity<Transporter> getTransporterById(@PathVariable Long t_id) {
        Transporter transporter = transporterService.getTransporterById(t_id);
        return new ResponseEntity<>(transporter, HttpStatus.OK);
    }
    
    @GetMapping("admin/transporter")
    public ResponseEntity<List<Transporter>> getAllTransporters() {
    	System.out.println("ali ali");
        List<Transporter> transporters = transporterService.getAllTransporters();
        return new ResponseEntity<>(transporters, HttpStatus.OK);
    }
    
    @PutMapping("admin/transverification/{t_id}")
    public ResponseEntity<String> updateTransporter(@PathVariable Long t_id,@RequestBody Transporter transporter) {
        transporterService.updateTransporter(t_id, transporter);
        return new ResponseEntity<>("updated", HttpStatus.OK);
    }
    
    @PutMapping("admin/transblacklist/{t_id}")
    public ResponseEntity<String> updateBlacklist(@PathVariable Long t_id,@RequestBody Transporter transporter) {
        transporterService.updateBlaclist(t_id, transporter);
        return new ResponseEntity<>("updated", HttpStatus.OK);
    }
    
    @DeleteMapping("transporter/{t_id}")
    public ResponseEntity<Void> deleteTransporter(@PathVariable Long t_id) {
        transporterService.deleteTransporter(t_id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @PostMapping("home/translogin")
    public ResponseEntity<Transporter> validateTransporter(@RequestBody Transporter trans)
    {     
    	
    	Transporter transporter=transporterService.validateTransporter(trans);
    		if(transporter!=null)
		return new ResponseEntity<>(transporter,HttpStatus.OK);
    		else
    			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }
    @GetMapping("customer/transporter")
    public ResponseEntity<List<Transporter>> getVerifiedTranspoter()    {
    	List<Transporter> tlist=transporterService.getVerifiedTranspoter();
    	System.out.println(tlist);
    	if(tlist!=null)
    		return new ResponseEntity<>(tlist,HttpStatus.OK);
        		else
        			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @PutMapping("transporter/pickupdeliverydate")
	public ResponseEntity<String> setPickUpDeliveryDate(@RequestParam int item_Id,@RequestParam String pickupDate,@RequestParam String deliveryDate){		//Item_id
		
		Item_Details item =transporterService.set_PickUpDeliveryDate(item_Id,pickupDate,deliveryDate);
		if(item!=null)
			return ResponseEntity.ok("deleted");        		
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
