package com.app.EfficientSS.dao;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;


import com.app.EfficientSS.beans.Item_Details;



@Repository
public interface ItemDao  extends JpaRepository<Item_Details,String> {
	
	@Query(value="select * from item_Details WHERE cust_id = ?",nativeQuery = true)
	List<Item_Details> findByCustId(int cust_id);

	@Query(value="select * from item_Details WHERE item_id = ?",nativeQuery = true)
	Item_Details findByItemId(int item_id);
	
}
