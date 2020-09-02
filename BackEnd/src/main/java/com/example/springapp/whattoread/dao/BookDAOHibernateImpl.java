package com.example.springapp.whattoread.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.springapp.whattoread.entity.Book;

@Repository
public class BookDAOHibernateImpl implements BookDAO {
	
	// define field for entitymanager
	
	private EntityManager entityManager;
	
	// set up contructor injection
	
	@Autowired
	public BookDAOHibernateImpl(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}

	@Override
	public List<Book> findAll() {
		
		// get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// create query
		Query<Book> theQuery =
				currentSession.createQuery("from Book", Book.class);
		
		// execute query and get result list
		List<Book> books = theQuery.getResultList();
		
		// return the results
		return books;
	}

	@Override
	public Book findById(int bookId) {
		
		// get the current hibernate session
		Session currentSession = entityManager.unwrap(Session.class);
		
		// get the book
		Book theBook =
				currentSession.get(Book.class, bookId);
		
		// return the book		
		return theBook;
	}

	@Override
	public void save(Book theBook) {
		
		// get the current hibernate session
		Session currentSession =
				entityManager.unwrap(Session.class);
		
		// save the book (if id=0 insert otherwise update )
		currentSession.saveOrUpdate(theBook);
		
	}

	@Override
	public void deleteById(int bookId) {
		
		// get hibernate current session
		Session currentSession = 
				entityManager.unwrap(Session.class);
		
		// create a query 
		Query theQuery = 
				currentSession.createQuery("delete from Book where id=:theBookId");
		theQuery.setParameter("theBookId", bookId);
		
		theQuery.executeUpdate();
	}

}
