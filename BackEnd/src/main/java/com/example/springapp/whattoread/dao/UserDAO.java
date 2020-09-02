package com.example.springapp.whattoread.dao;

import java.util.List;

import com.example.springapp.whattoread.entity.User;

public interface UserDAO {

	public List<User> findAll();
	public User findById(int userId);
	public void save(User theUser);
	public void deleteById(int userId);
	public User getUserByUsername(String theUsername);
}
