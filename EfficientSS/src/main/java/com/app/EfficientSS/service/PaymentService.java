package com.app.EfficientSS.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.EfficientSS.beans.Payment;

public interface PaymentService {

	Payment customerPayment(Payment payment, int c_id, int i_id);

	List<Payment> transporterCheckPayment(long t_id);

	List<Payment> CheckPayment();

}
