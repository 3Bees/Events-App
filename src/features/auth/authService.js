import { HttpService } from "../../apiServices/httpService";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";
import moment from "moment";

export default class AuthService {

  constructor(baseUrl = process.env.API_URL) {
    this.AuthenticationUrl = `${baseUrl}`;
    this.httpService = new HttpService();
  }
  async signUp(credentials){
    try {
      const response = await this.httpService.post("/users", credentials);
      let token = null;
      const result = await response.json();
      if(response.status === 200  && !result.errors && response.headers && response.headers.map && response.headers.map.authorization){
        token = response.headers.map.authorization.replace('Bearer ', '');
        await AsyncStorage.setItem('@token', token);
      }
      console.log('sign up: ', result);
      if(!result.errors){
        return {shoulUpdateAccount: true, profile: result, token};
      } else {
        return {shoulUpdateAccount: false, token: null, profile: null};
      }
    } catch (error) {
      return false;
    }
  }
  async updateUserProfile(userProfile){
    try {
      //grab token from authorization header in the response header
      const token = await AsyncStorage.getItem('@token');
      const response = await this.httpService.put("/users", userProfile,true);
      const result = await response.json();
      console.log('updateUserProfile: ', result);
      if(!result.errors){
        return { token, shouldVerifyAccount: true};
      } else {
        return { token: null, shouldVerifyAccount: false};
      }
    } catch (error) {
      return { token: null, shouldVerifyAccount: false};
    }
  }
  async updateAccount(userProfile){
    try {
      //grab token from authorization header in the response header
      const response = await this.httpService.put("/users", userProfile,true);
      const result = await response.json();
      console.log('updateAccount: ', result);
      if(!result.errors){
        return { user: result};
      } else {
        // return { token: null, shouldVerifyAccount: false};
      }
    } catch (error) {
      const errorMessage = await error.json();
      console.log(errorMessage)
      // return { token: null, shouldVerifyAccount: false};
    }
  }
  async verifyAccount(verificationCode){
    try {
      const token = await AsyncStorage.getItem('@token');
      const response = await this.httpService.get(`/users/confirmation?confirmation_token=${verificationCode}`, true);
      const result = await response.json();
      console.log('verifyAccount: ', result);
      if(!result.errors){
        return {accountPendingVerificationOnSignUp: !result.account_verified, token, profile: result};
      } else {
        return {accountPendingVerificationOnSignUp: false, token: null, profile: null};
      }
    } catch (error) {
      return false;
    }
  }
  async verifyAccountEmailChange(verificationCode){
    try {
      const response = await this.httpService.get(`/users/confirmation?confirmation_token=${verificationCode}`, true);
      const result = await response.json();
      console.log('verifyAccount: ', result);
      if(!result.errors){
        return {profile: result};
      } else {
        throw new Error('Incorrect verification code.')
      }
    } catch (error) {
      return false;
    }
  }
  async remindAdminToVerifyEmail(){
    try {
      const response = await this.httpService.post(`/resend_verification_email`, true);
      const result = await response.json();
      console.log('remindAdminToVerifyEmail: ', result);
      if(!result.errors){
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  async resendVerificationCode(){
    try {
      const response = await this.httpService.post("/resend_confirmation_code","", true);
      const result = await response.json();
      console.log('resend verification: ', result);
      if(!result.errors){
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  async signIn(credentials) {
    try {
      console.log('credentials: ', credentials)
      const response = await this.httpService.post("/users/sign_in", credentials);
      let token = null;
      const result = await response.json();
      if(response.headers && response.headers.map && response.headers.map.authorization){
        token = response.headers.map.authorization.replace('Bearer ', '');
        await AsyncStorage.setItem('@token', token);
      }
      let screenToGoTo = '';
      if(!result.email_verified){
        screenToGoTo = 'Verification';
      }else if(!result.last_name){
        screenToGoTo = 'UserProfile';
      }else if(!result.account_verified){
        screenToGoTo = 'PendingVerification';
      }
      return {screenToGoTo, error: false, profile: result, token};
    } catch (error) {
      const errorMessage = await error.json();
      console.log(errorMessage)
      return Promise.reject(error);
    }
  }
  async forgotPassword(email) {
    try {
      const response = await this.httpService.post("/users/password", email);
      const result = await response.json();
      console.log(result)
    } catch (error) {
      return Promise.reject(error);
    }
  }
 async signOut() {
   const response = await this.httpService.delete("/users/sign_out",null,true);
   await AsyncStorage.removeItem('@token');
    return null;
  }
  async getToken() {
    const token = await AsyncStorage.getItem('@token');
    // const decodedToken = jwtDecode(token);
    // console.log('decodedToken: ', decodedToken)
    // const tokenExpirationTime = moment.unix(decodedToken.exp);
    // const now = moment();
    // console.log('tokenExpirationTime: ', tokenExpirationTime)
    // const isTokenExpired = moment(tokenExpirationTime).isBefore(now);
    // console.log('isTokenExpired: ', isTokenExpired)
    // if(isTokenExpired){
    //    await AsyncStorage.removeItem('@token');
    // }
    return token;
  }
  async getUser(){
    try {
      const token = await AsyncStorage.getItem('@token');
      if(token){
        const response = await this.httpService.get("/users", true);
        const result = await response.json();
        console.log('USER: ', token, result);
        if(!result.error){
          return result;
        } else {
         throw new Error({message: result.error});
       }
      }
    } catch (error) {
      throw new Error({message: result.error});
    }
  }
  async clearUser() {
    await AsyncStorage.removeItem('@token');
    return null;
   }
}
