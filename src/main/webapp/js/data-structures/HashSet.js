/**
  * Organization: Revzoom India Pvt Ltd.
  * User: om
  * Date: 05/01/17
  * Time: 11:40 PM
  */
import Collection from "./Collection";
import "./Iterator";
import "./HashSetIterator";
import HashSetIterator from "./HashSetIterator";
export default class HashSet extends Collection {

  /**
   * @param collection{Collection} Optional collection to copy
   */
  constructor(collection = null) {
    super();

    /**
     * @type {Object}
     * @private
     */
    this._data = {};

    /**
     * @type {number}
     * @private
     */
    this._size = 0;

    if (collection) {
      this.addAll(collection);
    }
  }

  /**
   *
   * @param item
   * @returns {boolean}
   */
  contains(item) {
    return this._data[item] === true;
  }

  /**
   *
   * @param item
   * @returns {*}
   */
  add(item) {
    let oldItem = this.remove(item);
    this._data[item] = true;
    this._size = this._size + 1;
    return oldItem;
  }

  /**
   *
   * @param item
   * @returns {*}
   */
  remove(item) {
    let present = this._data[item];
    if (present) {
      delete this._data[item];
      this._size = this._size - 1;
    }
    return present ? item : null;
  }

  /**
   *
   * @param collection {Collection}
   */
  addAll(collection) {
    const iterator = collection.iterator();
    while (iterator.hasNext()) {
      const next = iterator.next();
      if (!this.contains(next))
        this.add(next);
    }
  }

  /**
   * clears the whole HashSet.
   */
  clear() {
    this._data = {};
    this._size = 0;
  }

  /**
   * returns size of the HashSet.
   * @returns {number|*}
   */
  size() {
    return this._size;
  }

  /**
   * returns the hashSet in form of Array.
   * @returns {Array}
   */
  toArray() {
    return this._data ? Object.keys(this._data) : [];
  }

  /**
   * returns iterator to iterate upon the HashSet.
   * @returns {HashSetIterator}
   */
  iterator() {
    return new HashSetIterator(this);
  }
}