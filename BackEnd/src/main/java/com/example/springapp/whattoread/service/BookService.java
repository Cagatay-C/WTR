package com.example.springapp.whattoread.service;

import java.util.List;

import com.example.springapp.whattoread.entity.Book;

public interface BookService {

	public List<Book> findAll();
	public Book findById(int bookId);
	public void save(Book theBook);
	public void deleteById(int bookId);
}
