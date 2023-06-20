package com.example.demo.DAO;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo.Entity.User;
@RepositoryRestResource(path="User")
@CrossOrigin("http://localhost:4200")


public interface UserDAO extends JpaRepository<User,Integer> {


}