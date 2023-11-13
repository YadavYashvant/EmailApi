package com.yashvant.emailapi.controller;

import com.yashvant.emailapi.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Email API";
    }

    //api to send email
    @PostMapping("/sendEmail")
    public ResponseEntity<?> sendEmail() {

    }
}
