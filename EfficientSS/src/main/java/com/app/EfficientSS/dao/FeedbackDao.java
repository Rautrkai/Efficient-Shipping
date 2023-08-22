package com.app.EfficientSS.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.EfficientSS.beans.Feedback;

@Repository
public interface FeedbackDao extends JpaRepository<Feedback,Integer> {

}
