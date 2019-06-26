/**
 * Created by Sarthak on 26-07-2018.
 */

import HashMap from '../protocol/HashMap';
import RunnableTask from '../protocol/RunnableTask';

import StringUtil from '../utils/StringUtil';
import PropertyUtil from '../utils/PropertyUtil';
import PluginAPI from 'PluginAPI';
import WorkerCallType from './WorkerCallType';
import WorkerMessage from './WorkerMessage';
import WorkerResponse from './WorkerResponse';
import WorkerExecutor from './WorkerExecutor';
import WebWorker from './WebWorker';

/**
 *
 */
export default class WorkerController {

  static initWorkerScript(){
    WorkerController.WORKER = new WebWorker(WorkerExecutor);
  }

  /**
   *
   * @param task {RunnableTask}
   * @param taskArgs {HashMap}
   * @param onSuccess {Function}
   * @param onFailure {Function}
   */
  static executeTask(task, taskArgs, onSuccess, onFailure) {
    let workerThread = new Worker(WorkerExecutor);
    workerThread.addEventListener('message',
      (event, a, b, c) => {
        /**
         * @type {WorkerResponse}
         */
        let taskResponse = PropertyUtil.checkIfNotNull(event.data) ? event.data : new WorkerResponse(WorkerCallType.TASK_CALL, null);
        if (taskResponse.getIsSuccess()) {
          onSuccess(taskResponse);
        }
        else {
          onFailure(taskResponse);
        }

        // Terminating worker thread after the execution done.
        workerThread.terminate();
      }, false);

    taskArgs.put("task", task);
    workerThread.postMessage(new WorkerMessage(WorkerCallType.TASK_CALL, taskArgs));
  }

  /**
   *
   * @param logMsgs {Array.<String>}
   * @param callbackFunc {Function}
   */
  static executeLogMsgs(logMsgs, callbackFunc = null) {
    let workerThread = new Worker(WorkerExecutor);
    workerThread.addEventListener('message',
      (event, a, b, c) => {
        /**
         * @type {WorkerResponse}
         */
        let logResp = PropertyUtil.checkIfNotNull(event.data) ? event.data : new WorkerResponse(WorkerCallType.LOGGING_CALL, null);
        if(PropertyUtil.checkIfNotNull(callbackFunc) && PropertyUtil.isFunctionType(callbackFunc))
          callbackFunc(logResp);

        // Terminating worker thread after the execution done.
        workerThread.terminate();
      }, false);

    workerThread.postMessage(new WorkerMessage(WorkerCallType.LOGGING_CALL, new HashMap().put("logMsgs", logMsgs)));
  }
}

WorkerController.DEFAULT_TIMER_INTERVAL = 10000; //10 seconds
//WorkerController.WORKER = null;