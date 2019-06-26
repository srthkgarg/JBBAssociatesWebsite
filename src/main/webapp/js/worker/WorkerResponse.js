/**
 * Created by Sarthak on 7/31/2018.
 */
import HashMap from '../protocol/HashMap';

import WorkerCalltype from './WorkerCallType';
import WorkerController from './WorkerController';

/**
 *
 */
export default class WorkerResponse {

  /**
   *
   * @param callType {WorkerCallType}
   * @param data {HashMap}
   */
  constructor(callType, data) {
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
    this.data = data;

    /**
     *
     * @type {boolean}
     * @private
     */
    this.isSuccess = false;

    /**
     *
     * @type {String}
     * @private
     */
    this.message = null;
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
   * @returns {Array}
   */
  getData() {
    return this.data;
  }

  /**
   *
   * @param data {HashMap}
   */
  setData(data) {
    this.data = data;
    return this;
  }

  /**
   * @returns {boolean}
   */
  getIsSuccess() {
    return this.isSuccess;
  }

  /**
   *
   * @param isSuccess {boolean}
   */
  setIsSuccess(isSuccess) {
    this.isSuccess = isSuccess;
    return this;
  }

  /**
   * @returns {String}
   */
  getMessage() {
    return this.message;
  }

  /**
   *
   * @param message {String}
   */
  setMessage(message) {
    this.message = message;
    return this;
  }
}
