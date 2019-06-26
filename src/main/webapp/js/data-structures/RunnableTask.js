import MessageUtil from "zmplugin/utils/MessageUtil";

/**
 * a prototype class for any runnable type task.
 */
export default class RunnableTask {
  /**
   * @public
   */
  constructor() {

  }

  /**
   * @public
   */
  run() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }

  /**
   * @public
   */
  exit() {
    throw new Error(MessageUtil.getMsgText("NOT_IMPLEMENTED_ERROR"));
  }
}