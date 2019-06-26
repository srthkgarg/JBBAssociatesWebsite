import Iterator from "./Iterator";
import HashSet from "./HashSet";
import MessageUtil from "zmplugin/utils/MessageUtil";

export default class HashSetIterator extends Iterator {

  /**
   * returns HashSetIterator.
   * @param hashSet{HashSet}
   */
  constructor(hashSet) {
    super();
    /***
     * @type {HashSet}
     * @private
     */
    this._hashSet = hashSet;

    /**
     * @type {Array}
     * @private
     */
    this._items = this._hashSet.toArray();

    /**
     *
     * @type {Number}
     * @private
     */
    this._size = this._items.length;

    /**
     * contains the next index in hashSet.
     * @type {number}
     * @private
     */
    this._index = 0;
  }

  /**
   * shows if next element present or not in hashSet.
   * @returns {boolean}
   */
  hasNext() {
    return (this._index < this._size);
  }

  /**
   * shows the next element in hashSet.
   * @returns {*}
   */
  next() {
    if (this.hasNext()) {
      return this._items[this._index++];
    }
    else {
      throw new Error(MessageUtil.getMsgText("NO_NEXT_ELEMENT_FOUND"));
    }
  }

  /**
   * removes the current element of iterator from the hashSet.
   */
  remove() {
    this._hashSet.remove(this._items[this._index - 1]);
  }
}