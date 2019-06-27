/**
 *
 */
export default class AuthenticationModal {
  constructor() {
    /**
     *
     * @type {String}
     * @private
     */
    this._userId = null;

    /**
     *
     * @type {String}
     * @private
     */
    this._userRole = null;

    /**
     *
     * @type {String}
     * @private
     */
    this._sessionId = null;

    /**
     *
     * @type {String}
     * @private
     */
    this._sessionCookie = null;

    /**
     *
     * @type {String}
     * @private
     */
    this._firstName = null;

    /**
     *
     * @type {String}
     * @private
     */
    this._lastName = null;

    /**
     *
     * @type {number}
     * @private
     */
    this._phoneNumber = null;

    /**
     *
     * @type {String}
     * @private
     */
    this._emailAddress = null;
  }

  get userId() {
    return this._userId;
  }

  set userId(value) {
    this._userId = value;
  }

  get sessionId() {
    return this._sessionId;
  }

  set sessionId(value) {
    this._sessionId = value;
  }

  get sessionCookie() {
    return this._sessionCookie;
  }

  set sessionCookie(value) {
    this._sessionCookie = value;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get phoneNumber() {
    return this._phoneNumber;
  }

  set phoneNumber(value) {
    this._phoneNumber = value;
  }

  get emailAddress() {
    return this._emailAddress;
  }

  set emailAddress(value) {
    this._emailAddress = value;
  }

  get userRole() {
    return this._userRole;
  }

  set userRole(value) {
    this._userRole = value;
  }
}