package com.app.EfficientSS.beans;
import java.util.HashMap;
import java.util.Map;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class EstimatePrice {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int estimateId;
	
	@Column(name="price_per_km")
	private double price_per_km;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="t_id",referencedColumnName="t_id")
	private Transporter transporter;

	public EstimatePrice(int estimateId, double price_per_km, Transporter transporter) {
		super();
		this.estimateId = estimateId;
		this.price_per_km = price_per_km;
		this.transporter = transporter;
	}

	public EstimatePrice() {
		super();
	}

	public int getEstimateId() {
		return estimateId;
	}

	public void setEstimateId(int estimateId) {
		this.estimateId = estimateId;
	}

	public double getPrice_per_km() {
		return price_per_km;
	}

	public void setPrice_per_km(double price_per_km) {
		this.price_per_km = price_per_km;
	}

	public Transporter getTransporter() {
		return transporter;
	}

	public void setTransporter(Transporter transporter) {
		this.transporter = transporter;
	}

	@Override
	public String toString() {
		return "EstimatePrice [estimateId=" + estimateId + ", price_per_km=" + price_per_km + ", transporter="
				+ transporter + "]";
	}
	
	
}