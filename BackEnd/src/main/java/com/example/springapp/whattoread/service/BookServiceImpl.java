package com.example.springapp.whattoread.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.springapp.whattoread.dao.BookDAO;
import com.example.springapp.whattoread.entity.Book;

@Service
public class BookServiceImpl implements BookService {

	private BookDAO bookDAO;

	// get BookDAO dependency by constructer dependecy injection
	@Autowired
	public BookServiceImpl(BookDAO theBookDAO) {
		
		bookDAO = theBookDAO;		
	}
	
	@Override
	@Transactional
	public List<Book> findAll() {
		
		return bookDAO.findAll();
	}

	@Override
	@Transactional
	public Book findById(int bookId) {
		
		return bookDAO.findById(bookId);
	}

	@Override
	@Transactional
	public void save(Book theBook) {
		
		bookDAO.save(theBook);
		
	}

	@Override
	@Transactional
	public void deleteById(int bookId) {
		
		bookDAO.deleteById(bookId);
		
	}
}
