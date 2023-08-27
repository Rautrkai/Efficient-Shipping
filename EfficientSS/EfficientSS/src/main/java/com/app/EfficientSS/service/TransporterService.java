package com.app.EfficientSS.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.app.EfficientSS.beans.Item_Details;
import com.app.EfficientSS.beans.Transporter;

public interface TransporterService {

	void createTransporter(Transporter transporter);

	Transporter getTransporterById(long t_id);

	List<Transporter> getAllTransporters();

	void updateTransporter(Long t_id, Transporter transporter);

	void deleteTransporter(Long t_id);

	Transporter validateTransporter(Transporter trans);

	void updateBlaclist(Long t_id, Transporter transporter);

	List<Transporter> getVerifiedTranspoter();

	Item_Details set_PickUpDeliveryDate(int item_Id, String pickupDate, String deliveryDate);

	 

}
