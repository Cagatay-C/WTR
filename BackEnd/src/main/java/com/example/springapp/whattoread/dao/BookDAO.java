package com.example.springapp.whattoread.dao;

import java.util.List;

import com.example.springapp.whattoread.entity.Book;

public interface BookDAO {
	
	public List<Book> findAll();
	public Book findById(int bookId);
	public void save(Book theBook);
	public void deleteById(int bookId);
}
