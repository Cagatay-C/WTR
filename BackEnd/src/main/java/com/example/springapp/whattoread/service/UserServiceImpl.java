package com.example.springapp.whattoread.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.springapp.whattoread.dao.UserDAO;
import com.example.springapp.whattoread.entity.User;

@Service
public class UserServiceImpl implements UserService {

	// define the field for UserDAO
	private UserDAO userDAO;
	
	// use constructor injection
	public UserServiceImpl(UserDAO theUserDAO) {
		
		userDAO = theUserDAO;
	}
	
	@Override
	@Transactional
	public List<User> findAll() {
		
		return userDAO.findAll();
	}

	@Override
	@Transactional
	public User findById(int userId) {
		
		return userDAO.findById(userId);
	}

	@Override
	@Transactional
	public void save(User theUser) {
		
		userDAO.save(theUser);
	}

	@Override
	@Transactional
	public void deleteById(int userId) {
		
		userDAO.deleteById(userId);
	}
	
	@Override
	@Transactional
	public User getUserByUsername(String theUsername) {
		
		return userDAO.getUserByUsername(theUsername);
	}
	
	
	
	
	
	
	
	

}
