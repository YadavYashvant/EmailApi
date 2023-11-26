package com.yashvant.emailapi.controller;

import com.yashvant.emailapi.model.EmailRequest;
import com.yashvant.emailapi.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class EmailController {

    @Autowired
    private EmailService emailService;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Email API";
    }

    //Api to send email
    @PostMapping("/sendEmail")
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request) {

        System.out.println("Email Request: " + request);
        boolean result = this.emailService.sendEmail(request.getSubject(), request.getMessage(), request.getTo());

        if(result) {
            return ResponseEntity.ok().body("Email sent successfully...");
        }else {
            return ResponseEntity.status(500).body("Email not sent...");
        }

        /*boolean result = this.emailService.sendEmail(request.getSubject(), request.getMessage(),);
        if (result) {
            return ResponseEntity.ok("Email sent successfully...");
        } else {
            return ResponseEntity.ok("Email not sent...");
        }*/

    }
}
