package com.app.EfficientSS.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	@Column(name="admin_email_id",nullable=false)
	private String admin_email_id;
	
	@Column(name="admin_password",nullable=false)
	private String admin_password;
	
	@Column(name="admin_phone_no",nullable=false)
	private String admin_phone_no;

	public Admin(String a_email_id, String a_password, String a_ph_no) {
		super();
		admin_email_id = a_email_id;
		admin_password = a_password;
		admin_phone_no = a_ph_no;
	}

	public Admin() {
		super();
	}

	

	public String getAdmin_email_id() {
		return admin_email_id;
	}

	public void setAdmin_email_id(String admin_email_id) {
		this.admin_email_id = admin_email_id;
	}

	public String getAdmin_password() {
		return admin_password;
	}

	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}

	public String getAdmin_phone_no() {
		return admin_phone_no;
	}

	public void setAdmin_phone_no(String admin_phone_no) {
		this.admin_phone_no = admin_phone_no;
	}

	@Override
	public String toString() {
		return "Admin [admin_email_id=" + admin_email_id + ", admin_password=" + admin_password + ", admin_ph_no=" + admin_phone_no + "]";
	}

	
}
