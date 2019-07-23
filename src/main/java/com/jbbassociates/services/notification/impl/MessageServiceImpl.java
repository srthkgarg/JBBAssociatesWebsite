package com.jbbassociates.services.notification.impl;

import com.jbbassociates.services.notification.IntfMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
public class MessageServiceImpl implements IntfMessageService {

  @Autowired
  private JavaMailSender mailSender;

  private ExecutorService executorService = Executors.newFixedThreadPool(5);

  public final void sendMessage(List<String> mobileNumbers, String message) {
    try {
      //executorService.submit(new SendMessage(mobileNumbers, message));
    } catch (final MailException ex) {
      System.out.println("Exception occurred" + ex);
      throw ex;
    } catch (Exception ex) {
      System.out.println(ex);
    }
  }

  private class SendMessage implements Runnable {

    private JavaMailSender mailSender;

    private MimeMessage message;

    public SendMessage(JavaMailSender mailSender, MimeMessage message) {
      this.mailSender = mailSender;
      this.message = message;
    }

    public void run() {
      mailSender.send(message);
    }

  }

}
