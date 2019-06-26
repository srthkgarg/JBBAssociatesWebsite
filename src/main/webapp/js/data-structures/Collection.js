import MessageUtil from "zmplugin/utils/MessageUtil";

export default class Collection {
  constructor() {

  }

  /**
   * @param item{*}
   * @return {boolean}
   */
  add(item) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   *
   * @param item
   * @return {boolean}
   */
  contains(item) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   *
   * @param item{*}
   * @return {*}
   */
  remove(item) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   *
   * @param collection{Collection}
   */
  addAll(collection) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   *
   * @param jsonArray{Array}
   */
  addArray(jsonArray) {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

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