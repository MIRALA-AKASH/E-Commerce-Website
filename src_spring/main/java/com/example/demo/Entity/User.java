package com.example.demo.Entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
@Column(name="User_Id")
private int User_Id;

@Column(name="First_Name")
private String First_Name;

@Column(name="Last_Name")
private String Last_Name;

@Column(name="Email")
private String Email;

@Column(name="Pass_word")
private String Pass_word;

@Column(name="User_Type")
private String UserType; 

//@OneToMany(mappedBy="User")
//private Set<Cart> cart;

//@OneToMany(mappedBy="User")
//private Set<Products> pro;



public User() {
}

public User(int user_Id, String first_Name, String last_Name, String email, String pass_word, String userType) {
	super();
	User_Id = user_Id;
	First_Name = first_Name;
	Last_Name = last_Name;
	Email = email;
	Pass_word = pass_word;
	UserType = userType;
}

public int getUser_Id() {
	return User_Id;
}

public void setUser_Id(int user_Id) {
	User_Id = user_Id;
}

public String getFirst_Name() {
	return First_Name;
}

public void setFirst_Name(String first_Name) {
	First_Name = first_Name;
}

public String getLast_Name() {
	return Last_Name;
}

public void setLast_Name(String last_Name) {
	Last_Name = last_Name;
}

public String getEmail() {
	return Email;
}

public void setEmail(String email) {
	Email = email;
}

public String getPass_word() {
	return Pass_word;
}

public void setPassword(String password) {
	Pass_word = password;
}

public String getUserType() {
	return UserType;
}

public void setUserType(String userType) {
	UserType = userType;
}

@Override
public String toString() {
	return "User [User_Id=" + User_Id + ", First_Name=" + First_Name + ", Last_Name=" + Last_Name + ", Email=" + Email
			+ ", Password=" + Pass_word + ", UserType=" + UserType + "]";
}
}
