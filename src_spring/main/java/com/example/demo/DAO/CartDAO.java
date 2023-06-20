package com.example.demo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.Entity.Cart;

@RepositoryRestResource(path="Cart")
@CrossOrigin("http://localhost:4200")


public interface CartDAO extends JpaRepository<Cart,Integer> {


}