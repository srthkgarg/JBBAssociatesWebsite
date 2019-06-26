//@flow

/**
 *
 */
export default class MapEntry {
  constructor(_key, _value) {
    /**
     * contains key of the map entry.
     * @private
     */
    this.key = _key;

    /**
     * contains value for the corresponding key in map entry.
     * @private
     */
    this.value = _value;

  }

  /**
   *
   * @param mapEntry { MapEntry }
   */
  copy(mapEntry) {
    this.key = mapEntry.getKey();
    this.value = mapEntry.getValue();
  }

  /**
   *
   * @returns {*}
   * @public
   */
  getKey() {
    return this.key;
  }

  /**
   *
   * @returns {*}
   * @public
   */
  getValue() {
    return this.value;
  }
}