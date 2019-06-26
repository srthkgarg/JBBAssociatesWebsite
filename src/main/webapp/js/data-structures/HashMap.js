/**
 * Organization: Revzoom India Pvt Ltd.
 * User: Sarthak
 * Date: 09-01-2017
 * Time: 10:16 PM
 */
import AbstractMap from "./AbstractMap";
import Iterator from "./Iterator";
import HashMapIterator from "./HashMapIterator";

export default class HashMap extends AbstractMap {

  /**
   * @param map{AbstractMap}
   */
  constructor(map = null) {
    super();
    /**
     *
     * @type {{}}
     * @private
     */
    this._map = {};
    /**
     * @type {number}
     * @private
     */
    this._size = 0;

    if (map) {
      this.putAll(map);
    }
  }

  /**
   *
   * @param key
   * @param value
   * @returns {*} Returns old value
   */
  put(key, value) {
    let prevValue = this.remove(key);
    this._map[key] = value;
    this._size++;
    return prevValue;
  }

  /**
   * @param key {string|number}
   * @return {*}
   */
  get (key) {
    return this._map[key];
  }

  /**
   *
   * @param key
   * @returns {boolean}
   */
  containsKey(key) {
    return this._map.hasOwnProperty(key);
  }

  /**
   *
   * @param itemKey
   * @returns {*} Returns the associated value.
   */
  remove(itemKey) {
    let rv = this.containsKey(itemKey);
    if (rv) {
      let prevVal = this._map[itemKey];
      delete this._map[itemKey];
      this._size--;
      return prevVal;
    }
    return null;
  }

  /**
   *
   * @param map {AbstractMap}
   */
  putAll(map) {
    const iterator = map.iterator();
    while (iterator.hasNext()) {
      const next = iterator.next();
      this.put(next.getKey(),next.getValue());
    }
  }

  /**
   *
   * @returns {Array}
   */
  keys() {
    return Object.keys(this._map);
  }

  /**
   *
   * @return {Array}
   */
  values() {
    return Object.values(this._map);
  }

  /**
   *
   */
  clear() {
    /**
     *
     * @type {{}}
     * @private
     */
    this._map = {};
    this._size = 0;
  }

  /**
   *
   * @returns {number}
   */
  size() {
    return this._size;
  }

  /**
   *
   * @returns {MapEntry|null}
   */
  firstEntry() {
    let iterator = this.iterator();
    if (iterator.hasNext())
      return iterator.next();

    return null;
  }

  /**
   *
   * @returns {MapEntry|null}
   */
  lastEntry() {
    let iterator = this.iterator();
    let lastEntry = null;
    while (iterator.hasNext())
      lastEntry = iterator.next();

    return lastEntry;
  }

  /**
   * @return Array Returns an Array of object with key and value properties
   */
  toArray() {
    const result = [];
    for (let key in this._map) {
      result.push({key: key, value: this.get(key)});
    }
    return result;
  }

  /**
   *
   * @returns {HashMapIterator}
   */
  iterator() {
    return new HashMapIterator(this);
  }

  /**
   *
   * @returns {String}
   */
  toJsonString() {
    return JSON.stringify(this._map);
  }

}
