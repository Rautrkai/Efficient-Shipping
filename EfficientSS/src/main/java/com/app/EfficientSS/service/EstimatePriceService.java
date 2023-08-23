package com.app.EfficientSS.service;

import org.springframework.http.ResponseEntity;

import com.app.EfficientSS.beans.EstimatePrice;
import com.app.EfficientSS.beans.Price;

public interface EstimatePriceService {

	Price findprice(long t_id, int item_id);

	void setEstimatedPrice(EstimatePrice estimatedPrice, long t_id, double charge_per_kg);

}
