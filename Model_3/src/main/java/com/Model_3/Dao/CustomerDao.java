package com.Model_3.Dao;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;

import com.Model_3.Application.CustomerApp;
import com.Model_3.Repositry.CustomerRepositry;


@Component
public class CustomerDao {
	@ Autowired
	CustomerRepositry repositor;
	
	public CustomerApp insert(CustomerApp customerapp ) {
		 return repositor.save(customerapp);
		
	}
	public CustomerApp delete(CustomerApp customerapp ) {
		
			repositor.delete(customerapp);			
		return customerapp;
		
	}
	public CustomerApp update(CustomerApp customerapp ) {
	//	for(CustomerApp n:repositor.findAll()) {
	//if(customerapp!=n) {
		repositor.save(customerapp);
	//	}else{
	//	System.out.println("Already existed");	
		
	//	}
		//}
		return customerapp;
	}
	public List<CustomerApp> view(){
		return repositor.findAll();
				
	}
	
	
}
