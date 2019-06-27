import PropertyUtil from '../utils/PropertyUtil';
import StringUtil from '../utils/StringUtil';

import AuthenticationModal from '../modals/AuthenticationModal';

/**
 *
 */
export default class AuthenticationService {

  static AUTH_DATA_KEY = "%JBB_AUTH_SESSION_KEY%";

  /**
   *
   */
  static getUserAuthData(){
    let authData = sessionStorage.getItem(AuthenticationService.AUTH_DATA_KEY);
    if(PropertyUtil.checkIfNull(authData)){
      authData = new AuthenticationModal();
      AuthenticationService.setUserAuthData(authData);
    }
    return authData;
  }

  /**
   *
   * @param authData {AuthenticationModal}
   * @param force {boolean}
   */
  static setUserAuthData(authData, force){
    if(PropertyUtil.checkIfNotNull(authData) || force){
      let previousAuthData = sessionStorage.getItem(AuthenticationService.AUTH_DATA_KEY);
      if(PropertyUtil.checkIfNotNull(previousAuthData) && !force){
        throw "Already a user is logged - in. Please logout and try again.";
      }
      else {
        sessionStorage.setItem(AuthenticationService.AUTH_DATA_KEY, authData);
      }
    }
  }

  /**
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return PropertyUtil.checkIfNotNull(AuthenticationService.getUserAuthData())
  }

  /**
   *
   * @returns {string}
   */
  static getUserFullName() {
    let authData = AuthenticationService.getUserAuthData();
    return authData.firstName + " " + authData.lastName;
  }

}