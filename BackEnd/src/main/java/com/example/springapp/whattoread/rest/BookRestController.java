package com.example.springapp.whattoread.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.whattoread.entity.Book;
import com.example.springapp.whattoread.service.BookService;



@RestController
@RequestMapping("/api")
public class BookRestController {

	private BookService bookService;
	
	// inject book service by using contructor injection)
	@Autowired
	public BookRestController(BookService theBookService) {
		bookService = theBookService;
		
	}

	// expose "/books" and return list of books
	
	@GetMapping("/books")
	public List<Book> getBooks(){
		return bookService.findAll();
	}
	
	@GetMapping("/books/{bookId}")
	public Book getBook(@PathVariable int bookId) {
		
		// get book by id 
		Book theBook = bookService.findById(bookId);
		
		if(theBook == null) {
			
			throw new RuntimeException("Book id not found-" + bookId);
		}
		
		return theBook;		
	}

	@PostMapping("/books")
	public Book addBook(@RequestBody Book theBook) {
		
		// set user id to 0. It will force a save of new item instead of update.
		theBook.setId(0);
		
		bookService.save(theBook);
		
		return theBook;
	}
	
	@PutMapping("/books")
	public Book updateBook(@RequestBody Book theBook) {
		
		bookService.save(theBook);
		
		return theBook;
	}
	
	@DeleteMapping("/books/{bookId}")
	public String deleteBook(@PathVariable int bookId) {
		
		Book theBook = bookService.findById(bookId);
		
		if(theBook == null) {
			
			throw new RuntimeException("Book id not found-" + bookId);
		}
		
		return "Deleted book id-" + bookId;
	}
	
	
	
	
	
	
	
	
	
			
}
