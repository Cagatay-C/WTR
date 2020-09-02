package com.example.springapp.whattoread.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.springapp.whattoread.entity.User;

@Repository
public class UserDAOHibernateImpl implements UserDAO {

	// define field 
	private EntityManager entityManager;
	
	// inject entityManager to create session
	// constructor dependecy injection
	@Autowired
	public UserDAOHibernateImpl(EntityManager theEntityManager) {
		
		entityManager = theEntityManager;
		
	}
	
	@Override
	public List<User> findAll() {
		
		// get the current session
		Session currentSession =
				entityManager.unwrap(Session.class);
				
		// create query 
		Query<User> theQuery = 
				currentSession.createQuery("from User",User.class);
		
		// get users list
		List<User> users = theQuery.getResultList();
		
		return users;	
	}

	@Override
	public User findById(int userId) {
		
		// get current session
		Session currentSession =
				entityManager.unwrap(Session.class);
		
		// get user 
		User theUser = 
				currentSession.get(User.class, userId);
				
		return theUser;
	}

	@Override
	public void save(User theUser) {
		
		// get current session
		Session currentSession =
				entityManager.unwrap(Session.class);
		
		// save or update by id (if id=0 insert otherwise update)
		currentSession.saveOrUpdate(theUser);
	
	}

	@Override
	public void deleteById(int userId) {
		
		// get current session
		Session currentSession =
				entityManager.unwrap(Session.class);
		
		// create query
		Query theQuery =
				currentSession.createQuery("delete from User where id=:theUserId");
		theQuery.setParameter("theUserId", userId);
		
		theQuery.executeUpdate();	
	}
	@Override
	public User getUserByUsername(String theUsername) {
		
		// get current session 
		Session currentSession = entityManager.unwrap(Session.class);
		
		//get user by username
		Query<User> theQuery = 
				currentSession.createQuery("from User where user_name=:username");
		theQuery.setParameter("username", theUsername);
		
		User theUser = theQuery.getSingleResult();
	
		return theUser;
	
	}

}
