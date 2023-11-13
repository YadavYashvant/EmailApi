package com.yashvant.emailapi.service;
import org.springframework.stereotype.Service;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import java.util.Properties;

@Service
public class EmailService {

    public void sendEmail(String subject, String message, String to) {

        String from = "yashvantyadav855@gmail.com";

        String host = "smtp.gmail.com";

        Properties properties = System.getProperties();
        System.out.println("PROPERTIES" + properties);

        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port", "465");
        properties.put("mail.smtp.ssl.enable", "true");
        properties.put("mail.smtp.auth","true");
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("yashvantyadav855@gmail.com", "yashvant@123");
        }
        });

        session.setDebug(true);

    }

    }

