import MessageUtil from "zmplugin/utils/MessageUtil";

/**
 * Created by om on 05/01/17.
 */
export default class Iterator {

  constructor() {
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * @return {*}
   */
  next() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  remove() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }
}