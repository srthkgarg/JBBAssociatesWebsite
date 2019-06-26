import MessageUtil from "zmplugin/utils/MessageUtil";

/**
 * Organization: Revzoom India Pvt Ltd.
 * User: Sarthak
 * Date: 09-01-2017
 * Time: 5:36 PM
 */
export default class AbstractMap {
  constructor() {

  }

  /**
   * @param key {string|number}
   * @param value{*}
   */
  put(key, value) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * @param key {string|number}
   * @return {*}
   */
  get(key) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * @param key {string|number}
   * @return {boolean}
   */
  containsKey(key) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * @param key {string|number}
   * @return {*}
   */
  remove(key) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   *
   * @param map {AbstractMap}
   */
  putAll(map) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * @return {Array}
   */
  keys() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * @return {Array}
   */
  values() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * Removes all element.
   */
  clear() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * @return {number}
   */
  size() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * return {Array}
   */
  toArray() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * @return {Iterator}
   */
  iterator() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }
}