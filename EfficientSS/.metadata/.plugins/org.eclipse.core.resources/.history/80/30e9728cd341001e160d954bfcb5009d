package com.app.EfficientSS.service;

import java.util.List; 
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.app.EfficientSS.beans.Customer;
import com.app.EfficientSS.beans.EstimatePrice;
import com.app.EfficientSS.beans.Item_Details;
import com.app.EfficientSS.beans.Transporter;
import com.app.EfficientSS.dao.EstimatePriceDao;
import com.app.EfficientSS.dao.ItemDao;
import com.app.EfficientSS.dao.TransporterDao;
import com.app.EfficientSS.beans.Price;

@Service
public class EstimatePriceServiceImpl implements EstimatePriceService {
	
	@Autowired
	private EstimatePriceDao Edao;
	
	@Autowired
	private ItemDao itemdao;
	
	@Autowired
	private TransporterDao tdao;

	@Override
	public Price findprice(long t_id,int item_id) {
		Item_Details item=itemdao.findByItemId(item_id);
		
		Optional <EstimatePrice> oldEstimatedPrice=Edao.findByTransporterId(t_id);
		EstimatePrice es=oldEstimatedPrice.get();
		
		double distance=0;
		if(item !=null) {
		String pickup=item.getPickup_city();
		String delivery=item.getDelivery_city();
		List<Object[]> pickupList = Edao.findValues(pickup);
		List<Object[]> deliveryList = Edao.findValues(delivery);

		for (Object[] pickupResult : pickupList) {
		    double pickupLatitude = (double) pickupResult[0];
		    double pickupLongitude = (double) pickupResult[1];

		    System.out.println("Pickup Latitude: " + pickupLatitude + ", Pickup Longitude: " + pickupLongitude);

		    for (Object[] deliveryResult : deliveryList) {
		        double deliveryLatitude = (double) deliveryResult[0];
		        double deliveryLongitude = (double) deliveryResult[1];

		        System.out.println("Delivery Latitude: " + deliveryLatitude + ", Delivery Longitude: " + deliveryLongitude);

		        double R = 6371; // Earth's radius in km
		        double dLat = Math.toRadians(deliveryLatitude - pickupLatitude);
		        double dLon = Math.toRadians(deliveryLongitude - pickupLongitude);

		        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		                   Math.cos(Math.toRadians(pickupLatitude)) * Math.cos(Math.toRadians(deliveryLatitude)) *
		                   Math.sin(dLon / 2) * Math.sin(dLon / 2);

		        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		        distance = R * c;

		        System.out.println("Distance between pickup and delivery: " + distance + " km");
		       
		    	}
			}	
		}
		Price price=new Price();
		price.setDistance(distance);
		price.setPrice(distance*es.getPrice_per_km());
		price.setPrice_per_km(es.getPrice_per_km());
		
		return price;
		
	}

	@Override
	public void setEstimatedPrice(EstimatePrice estimatedPrice, long t_id) {
try {
			
			Transporter Trans=tdao.getById(t_id);
			
			Optional <EstimatePrice> oldEstimatedPrice=Edao.findByTransporterId(t_id);
			
			if(oldEstimatedPrice.isPresent())
			{
				//Update
				EstimatePrice newEstimatedPrice=oldEstimatedPrice.get();
				newEstimatedPrice.setPrice_per_km(estimatedPrice.getPrice_per_km());
				Edao.save(newEstimatedPrice);
			}
			else
			{
				estimatedPrice.setTransporter(Trans);
				EstimatePrice ep=Edao.save(estimatedPrice);
				
			}
			
		} catch (Exception e) {
			System.out.println();
			

		}
	}

	
}
//CREATE TABLE cities (
//	    id INT PRIMARY KEY AUTO_INCREMENT,
//	    city_name VARCHAR(255) NOT NULL,
//	    latitude DOUBLE(9, 6) NOT NULL,
//	    longitude DOUBLE(9, 6) NOT NULL
//	);



//INSERT INTO cities (city_name, latitude, longitude)
//VALUES
//    ('Mumbai', 19.0760, 72.8777),
//    ('Pune', 18.5204, 73.8567),
//    ('Nagpur', 21.1458, 79.0882),
//    ('Nashik', 20.0059, 73.7798),
//    ('Kolhapur', 16.7050, 74.2433),
//    ('Dhule', 20.9042, 74.7748);
