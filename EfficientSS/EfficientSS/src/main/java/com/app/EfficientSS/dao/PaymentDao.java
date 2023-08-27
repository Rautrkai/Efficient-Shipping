package com.app.EfficientSS.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.EfficientSS.beans.Payment;

@Repository
public interface PaymentDao extends JpaRepository<Payment, Integer>{

	@Query(value="select * from Payment where t_id= ?",nativeQuery = true)
	List<Payment> getbyTransporterId(long t_id);


}
