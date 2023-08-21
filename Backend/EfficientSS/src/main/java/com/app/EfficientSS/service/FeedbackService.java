package com.app.EfficientSS.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.EfficientSS.beans.Feedback;

public interface FeedbackService {

	ResponseEntity<Object> registerCustFeedback(Feedback feedback, int cust_id);

	List<Feedback> getAll();

}
