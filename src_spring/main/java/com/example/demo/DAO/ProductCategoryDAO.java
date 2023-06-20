package com.example.demo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.Entity.ProductsCategory;
@RepositoryRestResource(path="Products_Category")
@CrossOrigin("http://localhost:4200")


public interface ProductCategoryDAO extends JpaRepository<ProductsCategory,Integer> {


}