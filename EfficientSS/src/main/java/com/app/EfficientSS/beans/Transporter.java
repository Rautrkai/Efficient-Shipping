package com.app.EfficientSS.beans;

import java.util.List;  


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="Transporter")
public class Transporter {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="t_id")
	private long t_id;
	@Column(name="t_full_name",nullable=false)
	private String t_full_name;
	@Column(name="t_email_id",nullable=false,unique=true)
	private String t_email_id;
	@Column(name="t_password",nullable=false)
	private String t_password;
	@Column(name="t_ph_no",nullable=false)
	private String t_ph_no;
	@Column(name="t_address",nullable=false)
	private String t_address;
//	 @Lob
//	 private byte[] businessRegistrationImage;
	 
	@Column(name="t_verification",columnDefinition="varchar(50) default 'Pending'",nullable=false)
	private String t_verification;
	@Column(name="t_blacklist",columnDefinition="varchar(50) default 'Clear'",nullable=false)
	private String t_blacklist;
	
	@JsonIgnore
	@OneToMany(mappedBy="transporter")
	private List<TransporterDriver> driver;
	
	@JsonIgnore
	@OneToMany(mappedBy="transporter")
	private List<Feedback> feedback_complaint;
	
	@JsonIgnore
	@OneToOne(mappedBy="transporter")
	private EstimatePrice esprice;
	
	@JsonIgnore
	@OneToMany(mappedBy="transporter")
	private List<Payment> payment;

	@JsonIgnore
	@OneToMany(mappedBy="transporter")
	private List<Bidder> bidder;

	
	public Transporter() {
		super();
	}



	public Transporter(long t_id, String t_full_name, String t_email_id, String t_password, String t_ph_no,
			String t_address, String t_verification, String t_blacklist,
			List<TransporterDriver> driver, List<Feedback> feedback_complaint, EstimatePrice esprice,
			List<Payment> payment, List<Bidder> bidder) {
		super();
		this.t_id = t_id;
		this.t_full_name = t_full_name;
		this.t_email_id = t_email_id;
		this.t_password = t_password;
		this.t_ph_no = t_ph_no;
		this.t_address = t_address;
//		this.businessRegistrationImage = businessRegistrationImage;
		this.t_verification = t_verification;
		this.t_blacklist = t_blacklist;
		this.driver = driver;
		this.feedback_complaint = feedback_complaint;
		this.esprice = esprice;
		this.payment = payment;
		this.bidder = bidder;
	}


	
	public EstimatePrice getEsprice() {
		return getEsprice();
	}

	public void setEsprice(EstimatePrice esprice) {
		this.esprice = esprice;
	}


	public List<Bidder> getBidder() {
		return bidder;
	}

	public void setBidder(List<Bidder> bidder) {
		this.bidder = bidder;
	}



	public long getT_id() {
		return t_id;
	}



	public void setT_id(long t_id) {
		this.t_id = t_id;
	}



	public String getT_full_name() {
		return t_full_name;
	}



	public void setT_full_name(String t_full_name) {
		this.t_full_name = t_full_name;
	}



	public String getT_email_id() {
		return t_email_id;
	}



	public void setT_email_id(String t_email_id) {
		this.t_email_id = t_email_id;
	}



	public String getT_password() {
		return t_password;
	}



	public void setT_password(String t_password) {
		this.t_password = t_password;
	}



	public String getT_ph_no() {
		return t_ph_no;
	}



	public void setT_ph_no(String t_ph_no) {
		this.t_ph_no = t_ph_no;
	}



	public String getT_address() {
		return t_address;
	}



	public void setT_address(String t_address) {
		this.t_address = t_address;
	}



	

	public String getT_verification() {
		return t_verification;
	}



	public void setT_verification(String t_verification) {
		this.t_verification = t_verification;
	}



	public String getT_blacklist() {
		return t_blacklist;
	}



	public void setT_blacklist(String t_blacklist) {
		this.t_blacklist = t_blacklist;
	}



	public List<TransporterDriver> getDriver() {
		return driver;
	}



	public void setDriver(List<TransporterDriver> driver) {
		this.driver = driver;
	}



	public List<Feedback> getFeedback_complaint() {
		return feedback_complaint;
	}



	public void setFeedback_complaint(List<Feedback> feedback_complaint) {
		this.feedback_complaint = feedback_complaint;
	}



	public List<Payment> getPayment() {
		return payment;
	}



	public void setPayment(List<Payment> payment) {
		this.payment = payment;
	}
	
	
	}