package com.example.demo.DAO;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.Entity.Products;


@RepositoryRestResource(path="Products")
@CrossOrigin("http://localhost:4200")


public interface ProductsDAO extends JpaRepository<Products,Integer> {
	//Page<Products>findByProduct_CategoryId(@RequestParam("Product_CategoryId")Integer Product_CategoryId,Pageable pageable);
public  List<Products> findByProduct_Name(String product_Name);

}