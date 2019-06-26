//@flow
import Iterator from "./Iterator";
import HashMap from "./HashMap";
import MapEntry from "./MapEntry";
import MessageUtil from "../utils/MessageUtil";

/**
 * HashMapIterator is used iterate over HashMaps.
 * I won't recommend using iterator. As it will make a copy.
 * We need to write better implementation of Iterator and maps
 */
export default class HashMapIterator extends Iterator {

  /**
   * returns HashMapIterator.
   * @param map{AbstractMap}
   */
  constructor(map) {
    super();
    /**
     *
     * @type {HashMap}
     * @private
     */
    this._map = map;

    /**
     * @type {Array}
     * @private
     */
    this._items = this._map.toArray();

    /**
     * contains the size of map.
     * @type {Number}
     * @private
     */
    this._size = this._items.length;

    /**
     * contains the next index in map.
     * @type {number}
     * @private
     */
    this._index = 0;
  }

  /**
   * shows if next element present or not in hashMap.
   * @returns {boolean}
   */
  hasNext() {
    return (this._index < this._size);
  }

  /**
   * shows the next element in hashMap.
   * @returns {MapEntry}
   */
  next() {
    if (this.hasNext()) {
      let nextItem = this._items[this._index++];
      return new MapEntry(nextItem.key, nextItem.value);
    }
    else {
      throw new Error(MessageUtil.getMsgText("NO_NEXT_ELEMENT_FOUND"));
    }
  }

  /**
   * Removes the current element of iterator from the hashMap.
   * Method returns nothing.
   */
  remove() {
    let currItem = this._items[this._index - 1];
    this._map.remove(currItem.key);
  }
}
