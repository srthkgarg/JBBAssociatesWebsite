/**
 * Created by Sarthak on 7/31/2018.
 */
import _ from 'lodash';
import HashMap from '../protocol/HashMap';
import RunnableTask from '../protocol/RunnableTask';

import WorkerCallType from './WorkerCallType';
import WorkerResponse from './WorkerResponse';
import WorkerMessage from './WorkerMessage';

import PropertyUtil from '../utils/PropertyUtil';
import PluginAPI from 'PluginAPI';
import MessageUtil from "zmplugin/utils/MessageUtil";

export default class WorkerExecutor extends RunnableTask {

  /**
   *
   */
  constructor() {
    super();
    this.init();

    if (self === self.window) {
      this.message = MessageUtil.getMsgText("EXECUTION_TERMINATED_THREAD_IS_NOT_WORKING_THREAD");
      this.exit();
    }
    else {
      this.run();
    }
  }

  init() {
    /**
     *
     * @type {boolean}
     */
    this.success = false;

    /**
     *
     * @type {String}
     */
    this.message = null;

    /**
     *
     * @type {HashMap}
     */
    this.data = new HashMap();
  }

  /**
   *
   * @returns {*}
   */
  run() {
    self.addEventListener('message', function (event) {
      /**
       * @type {WorkerMessage}
       */
      let workerMessage = event.data;
      if (PropertyUtil.checkIfNotNull(workerMessage)) {
        switch (workerMessage.getType()) {
          case WorkerCallType.LOGGING_CALL :
            this.executeLoggingCall(workerMessage);
            break;
          case WorkerCallType.NOTIFICATION_CALL :
            this.executeNotificationCall(workerMessage);
            break;
          case WorkerCallType.TIMER_CALL :
            this.executeTimerCall(workerMessage);
            break;
          case WorkerCallType.TASK_CALL :
            this.executeTaskCall(workerMessage);
            break;
          default :
            this.message = MessageUtil.getMsgText("INCORRECT_WORKER_TYPE");
            this.success = false;
            break;
        }
        this.exit();
      }
      else {
        this.message = MessageUtil.getMsgText("WORKER_MESSAGE_INCORRECT") ;
        this.exit();
      }
    }, false);
  }

  /**
   *
   * @returns {*}
   */
  exit() {
    self.postMessage(this.createWorkerResponse());
    self.close();
  }

  /**
   *
   * @returns {WorkerResponse}
   * @private
   */
  createWorkerResponse() {
    return new WorkerResponse(WorkerCallType.LOGGING_CALL, this.data).setIsSuccess(this.success).setMessage(this.message);
  }

  /**
   *
   * @param workerMsg {WorkerMessage}
   */
  executeLoggingCall(workerMsg) {
    if (PropertyUtil.checkIfNotNull(workerMsg.getData()) && workerMsg.getData().size() > 0 && PropertyUtil.checkIfNotNull(workerMsg.getData().get("logMsgs"))) {
      PluginAPI.loggingMsgs(workerMsg.getData().get("logMsgs")).then(
        logResp => {
          if(PropertyUtil.checkIfNotNull(logResp) && logResp.isSuccess){
            this.success = true;
          }
          else {
            this.success = false;
            this.message = logResp && logResp.message? logResp.message :MessageUtil.getMsgText("LOGGING_FAILED_REASON_UNKNOWN");
          }
        },
        logError => {
          this.success = false;
          this.message = logError && logError.error? logError.error : MessageUtil.getMsgText("LOGGING_FAILED_REASON_UNKNOWN");
        }
      );
    }
    else {
      this.message = MessageUtil.getMsgText("LOGGING_MSG_NOT_RECORDED");
      this.exit();
    }
  }

  /**
   *
   * @param workerMsg {WorkerMessage}
   */
  executeTaskCall(workerMsg) {
    if (PropertyUtil.checkIfNotNull(workerMsg.getData()) && workerMsg.getData().size() > 0) {
      //Todo: do the task call here.

    }
    else {
      this.message = "";
      this.exit();
    }
  }

  /**
   *
   * @param workerMsg {WorkerMessage}
   */
  executeNotificationCall(workerMsg) {
    if (PropertyUtil.checkIfNotNull(workerMsg.getData()) && workerMsg.getData().size() > 0) {
      //Todo: Do notification call accordingly.


    }
    else {
      this.message = "";
      this.exit();
    }
  }

  /**
   *
   * @param workerMsg {WorkerMessage}
   */
  executeTimerCall(workerMsg) {
    if (PropertyUtil.checkIfNotNull(workerMsg.getData()) && workerMsg.getData().size() > 0) {
      //Todo: Do notification call accordingly.


    }
    else {
      this.message = "";
      this.exit();
    }
  }
}