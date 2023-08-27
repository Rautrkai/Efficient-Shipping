package com.app.EfficientSS.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.EfficientSS.beans.Bidder;

@Repository
public interface BidderDao extends JpaRepository<Bidder,Integer> {

}
