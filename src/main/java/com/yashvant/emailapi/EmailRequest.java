package com.yashvant.emailapi;

public class EmailRequest {

    private String from;
    private String subject;
    private String message;

    public EmailRequest(String from, String subject, String message) {
        this.from = from;
        this.subject = subject;
        this.message = message;

    }

    public EmailRequest() {
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "EmailRequest{" +
                "from='" + from + '\'' +
                ", subject='" + subject + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
