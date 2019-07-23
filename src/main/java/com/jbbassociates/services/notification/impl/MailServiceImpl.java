package com.jbbassociates.services.notification.impl;

import com.jbbassociates.Constants;
import com.jbbassociates.services.notification.IntfMailService;
import com.jbbassociates.utils.StringUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
public class MailServiceImpl implements IntfMailService {

  @Autowired
  private JavaMailSender mailSender;

  private ExecutorService executorService = Executors.newFixedThreadPool(5);

  public final void sendMail(final MimeMessage message) {
    try {
      executorService.submit(new SendMail(mailSender, message));
    } catch (final MailException ex) {
      System.out.println("Exception occurred" + ex);
      throw ex;
    } catch (Exception ex) {
      System.out.println(ex);
    }
  }

  public Map<String, String> getMailProps(final String mailTo, final String subject, final String mailFrom, final String textMsg, final String cc, String contentType) {
    final Map<String, String> mailProps = new HashMap<String, String>();
    mailProps.put("mailTo", mailTo);

    if (StringUtil.isNotNullOrEmpty(cc)) {
      mailProps.put("cc", cc);
    }

    mailProps.put("mailFrom", mailFrom);
    mailProps.put("subject", subject);

    if (StringUtil.isNotNullOrEmpty(contentType)) {
      mailProps.put("contentType", contentType);
    }
    mailProps.put("textMsg", textMsg);
    return mailProps;
  }

  public MimeMessage createHtmlMimeMessage(final Map<String, String> mailProps) {
    final MimeMessage message = mailSender.createMimeMessage();
    try {
      final MimeMessageHelper messageHelper = new MimeMessageHelper(message, false);
      final String[] mail = mailProps.get("mailTo").split(Constants.LIST_SPEPARATOR);
      if (mail != null && mail.length > 0 && StringUtil.isNotNullOrEmpty(mail[0])) {
        messageHelper.setTo(mail);
      }
      if (mailProps.containsKey("cc") && mailProps.get("cc") != null) {
        String[] mailcc = mailProps.get("cc").split(Constants.LIST_SPEPARATOR);
        messageHelper.setCc(mailcc);
      }
      messageHelper.setSubject(mailProps.get("subject"));
      messageHelper.setFrom(mailProps.get("mailFrom"));
      if (mailProps.get("contentType") != null)
        message.setContent(mailProps.get("textMsg"), mailProps.get("contentType"));
      else
        message.setContent(mailProps.get("textMsg"), "text/html; charset=utf-8");
    } catch (final MessagingException e) {
      System.out.println("Exception occurred while creating HTML Mime Message " + e);
      e.printStackTrace();
    }
    return message;
  }

  private class SendMail implements Runnable {

    private JavaMailSender mailSender;

    private MimeMessage message;

    public SendMail(JavaMailSender mailSender, MimeMessage message) {
      this.mailSender = mailSender;
      this.message = message;
    }

    public void run() {
      mailSender.send(message);
    }

  }

}
