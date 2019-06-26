/**
 * Created by Sarthak on 26-07-2018.
 */


export default class WorkerCallType {

  /**
   *
   * @param name{string}
   * @param codes{...string}
   */
  constructor(name, ...codes) {
    /**
     *
     * @type {Array.<string>}
     * @private
     */
    this._codes = codes;

    /**
     * @type {string}
     * @private
     */
    this._name = name;
  }

  /**
   * @return {string}
   * @public
   */
  get code() {
    return this._codes[0];
  }

  /**
   *
   * @return {Array.<string>}
   */
  get codes() {
    return this._codes;
  }

  get name() {
    return this._name;
  }

  toString() {
    return this.name;
  }

  /**
   *
   * @param {string} input
   * @returns {WorkerCallType}
   */
  static toEnum(input) {
    /**
     * @type {Array<WorkerCallType>}
     */
    const values = WorkerCallType.values;
    if (input) {
      input = input.toLowerCase();
      for (let index = 0; index < values.length; index++) {
        /**
         * @type {WorkerCallType}
         */
        const element = values[index];
        if (element.toString().toLowerCase() === input) {
          return element;
        } else {
          for (var codeIndex = 0; codeIndex < element.codes.length; codeIndex++) {
            const code = element.codes[codeIndex];
            if (code.toLowerCase() === input) {
              return element;
            }
          }
        }
      }
    }
    return WorkerCallType.UNKNOWN;
  }
}

WorkerCallType.LOGGING_CALL = new WorkerCallType("LOGGING_CALL", "LOGGING_CALL");
WorkerCallType.NOTIFICATION_CALL = new WorkerCallType("NOTIFICATION_CALL", "NOTIFICATION_CALL");
WorkerCallType.TIMER_CALL = new WorkerCallType("TIMER_CALL", "TIMER_CALL");
WorkerCallType.TASK_CALL = new WorkerCallType("TASK_CALL", "TASK_CALL");
WorkerCallType.UNKNOWN = new WorkerCallType("UNKNOWN", "UNKNOWN");

WorkerCallType.values = [
  WorkerCallType.LOGGING_CALL,
  WorkerCallType.NOTIFICATION_CALL,
  WorkerCallType.TIMER_CALL,
  WorkerCallType.TASK_CALL,
  WorkerCallType.UNKNOWN,
];