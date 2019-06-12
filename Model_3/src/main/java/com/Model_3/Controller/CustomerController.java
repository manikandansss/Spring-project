package com.Model_3.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Model_3.Application.CustomerApp;
import com.Model_3.Seervice.CustomerService;
import java.util.List;

@RestController
@RequestMapping("/hi")
public class CustomerController {
	@ Autowired
	CustomerService customerservice;
@CrossOrigin(origins = "http://localhost:8080")
@PostMapping("/create")
	public CustomerApp insert(@RequestBody CustomerApp customerapp ) {
		
		return customerservice.insert(customerapp);
	}
@CrossOrigin(origins = "http://localhost:8080")
@PostMapping("/delete")
	public CustomerApp delete(@RequestBody CustomerApp customerapp ) {
		return customerservice.delete(customerapp);
	}
@CrossOrigin(origins = "http://localhost:8080")
@PostMapping("/update")
	public CustomerApp update(@RequestBody CustomerApp customerapp ) {
	
	return customerservice.update(customerapp);
	
	}
@CrossOrigin(origins = "http://localhost:8080")
@GetMapping("/view")
	public List<CustomerApp> view(){
		
		return customerservice.view();
	}
}

