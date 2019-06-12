package com.Model_3.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Model_3.Application.CustomerApp;
@Repository
public interface CustomerRepositry extends JpaRepository<CustomerApp,Long> {

}
