package com.example.springapp.whattoread.rest;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.whattoread.entity.User;
import com.example.springapp.whattoread.service.UserService;

@RestController
@RequestMapping("/api")
public class UserRestController {
	
	// define userService field
	private UserService userService;
	
	// get UserService by using constructor injection
	public UserRestController(UserService theUserService) {
		
		userService = theUserService; 
	}
	
	@GetMapping("/users")
	public List<User> getUsers(){
		
		return userService.findAll();
	}
	
	@GetMapping(value="/users/{userId}")
	public User getUser(@PathVariable("userId") int userId) {
		
		User theUser = userService.findById(userId);
		
		if(theUser == null) {
			
			throw new RuntimeException("User id not found-" + userId);
		}
		
		return theUser;
	}
	
	@PostMapping("/users")
	public User addUser(@RequestBody User theUser) {
		
		// just in case set id to 0. It will force a save of new item.. instead of update
		theUser.setId(0);
		
		userService.save(theUser);
		
		return theUser;
	}
	
	@PutMapping("/users")
	public User updateUser(@RequestBody User theUser) {
		
		userService.save(theUser);
		
		return theUser;
	}
	
	@DeleteMapping("/users/{userId}")
	public String deleteUser(@PathVariable int userId) {
		
		User theUser = userService.findById(userId);
		
		if(theUser == null) {
			
			throw new RuntimeException("User id not found-" + userId);
		}
		
		return "Deleted user id-" + userId;
	}
	
	@GetMapping(value="/user/{username}")
	public User getUserByUsername(@PathVariable("username") String username ) {
		User theUser = userService.getUserByUsername(username);
		
		if(theUser == null) {
			throw new RuntimeException("Username not found - " + username);
		}
		
		return theUser;
		
	}
		
	
	
}
