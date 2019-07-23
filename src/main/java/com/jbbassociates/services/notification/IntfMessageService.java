package com.jbbassociates.services.notification;

import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Map;

public interface IntfMessageService {

  void sendMessage(List<String> mobileNumbers, String message);
}
