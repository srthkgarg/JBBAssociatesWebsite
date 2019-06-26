import WorkerCalltype from './WorkerCallType';
import WorkerController from './WorkerController';

/**
 * 
 */
export default class WorkerMessage {

  /**
   * 
   * @param callType {WorkerCallType}
   * @param args {HashMap}
   */
  constructor(callType, args) {
    /**
     *
     * @type {String}
     * @private
     */
    this.type = callType;

    /**
     *
     * @type {HashMap}
     * @private
     */
    this.args = args;

    /**
     *
     * @type {String}
     * @private
     */
    this.timerInterval = WorkerController.DEFAULT_TIMER_INTERVAL;
  }

  /**
   * @returns {WorkerCallType}
   */
  getType() {
    return this.type;
  }

  /**
   *
   * @param callType {WorkerCallType}
   */
  setType(callType) {
    this.type = callType;
    return this;
  }

  /**
   * @returns {HashMap}
   */
  getData() {
    return this.args;
  }

  /**
   *
   * @param args {HashMap}
   */
  setData(args) {
    this.args = args;
    return this;
  }

  /**
   * @returns {number}
   */
  getTimerInterval() {
    return this.timerInterval;
  }

  /**
   *
   * @param timerInterval {number}
   */
  setTimerInterval(timerInterval) {
    this.timerInterval = timerInterval;
    return this;
  }
}
