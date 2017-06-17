/*
 * Copyright (c) 2007, RevZoom,Inc. All Rights Reserved.
 */

package system;

import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;

public class ThreadFactoryWithName implements ThreadFactory {
  public void useDaemons(boolean useDaemons) {
    this.useDaemons = useDaemons;
  }

  protected String threadGroupName;
  private AtomicInteger threadSeq;

  public Thread newThread(Runnable r) {
    String threadId = getThreadId();
    Thread t =  new Thread(r, threadId);
    t.setDaemon(useDaemons);
    return t;
  }

  protected String getThreadId() {
    int i = threadSeq.incrementAndGet();
    String threadId = threadGroupName + i;
    return threadId;
  }

  public ThreadFactoryWithName(String threadGroupName) {
    this.threadGroupName = threadGroupName + "-";
    this.threadSeq = new AtomicInteger();
  }

  public ThreadFactoryWithName(String threadGroupName, boolean useDaemons) {
    this(threadGroupName);
    this.useDaemons = useDaemons;
  }

  protected boolean useDaemons=false;
}
