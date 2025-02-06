package com.newlecture.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	
	@GetMapping("/index")
	public String adsf() {
		return "Hello Spring Boot. 이규호 테스트111111";
	}

}
