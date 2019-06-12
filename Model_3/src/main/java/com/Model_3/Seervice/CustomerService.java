package com.Model_3.Seervice;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Model_3.Application.CustomerApp;
import com.Model_3.Dao.CustomerDao;


@Component
public class CustomerService {
	@Autowired
	CustomerDao customerdao;
public CustomerApp insert(CustomerApp customerapp ) {
		
		return customerdao.insert(customerapp);

}
public CustomerApp delete(CustomerApp customerapp ) {
	
	return customerdao.delete(customerapp);
}
public CustomerApp update(CustomerApp customerapp ) {
	
	return customerdao.update(customerapp);

}
public List<CustomerApp> view(){
	return customerdao.view();
}
}
