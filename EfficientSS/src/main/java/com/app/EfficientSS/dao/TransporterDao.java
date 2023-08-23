package com.app.EfficientSS.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.EfficientSS.beans.Transporter;


@Repository
public interface TransporterDao extends JpaRepository<Transporter,Long>{

	
	@Query(value="SELECT * FROM Transporter WHERE t_email_id = ?",nativeQuery = true)
	Transporter findByEmailId(String email);

	@Query(value="SELECT * FROM Transporter WHERE  t_verification='Done' and t_blacklist='Clear'",nativeQuery = true)
	List<Transporter> findVerifiedTrans();

}
