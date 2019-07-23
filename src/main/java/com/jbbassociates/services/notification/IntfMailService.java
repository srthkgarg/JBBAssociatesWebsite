package com.jbbassociates.services.notification;

import javax.mail.internet.MimeMessage;
import java.util.Map;

public interface IntfMailService {

  void sendMail(final MimeMessage message);

  MimeMessage createHtmlMimeMessage(final Map<String, String> mailProps);

  Map<String, String> getMailProps(final String mailTo, final String subject, final String mailFrom, final String textMsg,
                                   final String cc, String contentType);
}
