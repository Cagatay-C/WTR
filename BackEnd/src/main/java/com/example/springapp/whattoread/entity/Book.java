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
@Table(name="book")
public class Book {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="book_name")
	private String bookName;
	
	@Column(name="book_description")
	private String bookDesc;
	
	@Column(name="book_url")
	private String bookUrl;
	

	@ManyToMany(fetch=FetchType.LAZY,
			cascade= {CascadeType.PERSIST,
			CascadeType.MERGE,
			CascadeType.DETACH,
			CascadeType.REFRESH})
	@JoinTable(
			name="user_book",
			joinColumns=@JoinColumn(name="book_id"),
			inverseJoinColumns=@JoinColumn(name="user_id")
			)
	@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class,
	property="id"
			)
	private List<User> users;
	
	public Book() {
		
	}

	public Book(int id, String bookName, String bookDesc, String bookUrl, List<User> users) {
		this.id = id;
		this.bookName = bookName;
		this.bookDesc = bookDesc;
		this.bookUrl = bookUrl;
		this.users = users;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookDesc() {
		return bookDesc;
	}

	public void setBookDesc(String bookDesc) {
		this.bookDesc = bookDesc;
	}
	
	public String getBookUrl() {
		return bookUrl;
	}
	
	public void setBookUrl(String bookUrl) {
		this.bookUrl = bookUrl;
	}

	
	
	public List<User> getUsers() {
		return users;
	}

	public void setUsers(List<User> users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "Book [id=" + id + ", bookName=" + bookName + ", bookDesc=" + bookDesc + ", bookUrl=" + bookUrl
				+ ", users=" + users + "]";
	}


}
