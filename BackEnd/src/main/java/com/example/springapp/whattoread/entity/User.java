package com.example.springapp.whattoread.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
@Table(name="user")
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="user_name")
	private String userName;
	
	@Column(name="user_password")
	private String userPass;
	
	@Column(name="email")
	private String email;
	
	
	@ManyToMany(fetch=FetchType.LAZY,
			cascade={CascadeType.PERSIST,
			CascadeType.DETACH,
			CascadeType.MERGE,
			CascadeType.REFRESH
			})
	@JoinTable(
			name="user_book",
			joinColumns=@JoinColumn(name="user_id"),
			inverseJoinColumns=@JoinColumn(name="book_id")
			)
	@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class,
	property="id"
			)
	private List<Book> books;
	
	public User() {
		
	}

	public User(int id, String userName, String userPass, String email, List<Book> books) {
		this.id = id;
		this.userName = userName;
		this.userPass = userPass;
		this.email = email;
		this.books = books;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPass() {
		return userPass;
	}

	public void setUserPass(String userPass) {
		this.userPass = userPass;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

	public List<Book> getBooks() {
		return books;
	}

	public void setBooks(List<Book> books) {
		this.books = books;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", userPass=" + userPass + ", email=" + email + ", books="
				+ books + "]";
	}

	
	
}
