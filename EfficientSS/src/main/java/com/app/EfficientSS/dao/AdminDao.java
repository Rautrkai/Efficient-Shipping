package com.app.EfficientSS.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.EfficientSS.beans.Admin;


@Repository
public interface AdminDao extends JpaRepository<Admin,String>{

	@Query(value="SELECT * FROM Admin WHERE admin_email_id = ?",nativeQuery = true)
	Admin findByEmail(String a_email_id);
}
