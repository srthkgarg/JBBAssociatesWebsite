/**
 * Created by Sarthak on 8/24/2018.
 */
export default class TaskScheduler {
  /**
   *
   * @param task {Function}
   * @param taskArgs {Array}
   * @param callbackFunc {Function}
   * @param timer {number}
   */
  constructor(task, taskArgs, callbackFunc = null, timer = TaskScheduler.DEFAULT_TIMER) {
    /**
     *
     * @type {Function}
     */
    this.task = task;

    /**
     *
     * @type {Promise}
     */
    this.taskArgs = taskArgs;

    /**
     *
     * @type {Function}
     */
    this.callbackFunc = callbackFunc;

    /**
     *
     * @type {number}
     */
    this.timer = timer && timer >= 0 ? timer * 1000 : TaskScheduler.DEFAULT_TIMER * 1000;

    /***
     *
     * @type {number}
     */
    this.timerId = null;

    /***
     *
     * @type {boolean}
     */
    this.started = false;
  }

  canStart() {
    return this.task !== null && this.task !== undefined && typeof this.task === "function";
  }

  /**
   *
   * @returns {number|*}
   * @public
   */
  start = () => {
    this.timerId = setTimeout(() => this.executeTask(), this.timer);
    this.started = true;
    return this.timerId;
  };

  /**
   *
   * @returns {*}
   * @private
   */
  executeTask = () => {
    this.task(this.taskArgs, this.callbackFunc);
    this.finish();
  };

  /**
   *
   * @returns {boolean}
   */
  isStarted() {
    return this.started;
  }

  /**
   *
   * @returns {boolean}
   * @public
   */
  canCancel() {
    return this.timerId !== null && this.timerId !== undefined && this.timerId > 0;
  }

  /**
   *@public
   */
  cancel() {
    clearTimeout(this.timerId);
    this.finish();
  }

  /**
   * @private
   */
  finish() {
    this.timerId = null;
    this.started = false;
  }
}

/**
 *
 * @type {number}
 */
TaskScheduler.DEFAULT_TIMER = 10; //Default timer of 10 seconds.