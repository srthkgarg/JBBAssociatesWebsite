import PropertyUtil from '../utils/PropertyUtil';
import StringUtil from '../utils/StringUtil';

import AuthenticationModal from '../modals/AuthenticationModal';

/**
 *
 */
export default class AuthenticationController {

  static AUTH_DATA_KEY = "%JBB_AUTH_SESSION_KEY%";
  static ADMIN_ROLE = "ADMIN";
  static CUSTOMER_ROLE = "CUSTOMER";
  static SELLER_ROLE = "SELLER";

  /**
   *
   */
  static getUserAuthData(createIfNull = false){
    let authData = sessionStorage.getItem(AuthenticationController.AUTH_DATA_KEY);
    if(PropertyUtil.checkIfNull(authData) && createIfNull){
      authData = new AuthenticationModal();
      AuthenticationController.setUserAuthData(authData);
    }
    return authData;
  }

  /**
   *
   * @param authData {AuthenticationModal}
   * @param force {boolean}
   */
  static setUserAuthData(authData, force = false){
    if(PropertyUtil.checkIfNotNull(authData) || force){
      let previousAuthData = sessionStorage.getItem(AuthenticationController.AUTH_DATA_KEY);
      if(PropertyUtil.checkIfNotNull(previousAuthData) && !force){
        throw "Already a user is logged - in. Please logout and try again.";
      }
      else {
        sessionStorage.setItem(AuthenticationController.AUTH_DATA_KEY, authData);
      }
    }
  }

  /**
   *
   * @returns {boolean}
   */
  static clearAuthData(){
    AuthenticationController.setUserAuthData(null, true);
    return true;
  }

  /**
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return PropertyUtil.checkIfNotNull(AuthenticationController.getUserAuthData())
  }

  /**
   *
   * @returns {string}
   */
  static getUserFullName() {
    let authData = AuthenticationController.getUserAuthData();
    return authData.firstName + " " + authData.lastName;
  }

  static isUserAdmin() {
    let authData = AuthenticationController.getUserAuthData();
    return authData.userRole === AuthenticationController.ADMIN_ROLE;
  }

}