import { HttpService } from "../../apiServices/httpService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class UserService {

  constructor(baseUrl = process.env.API_URL) {
    this.AuthenticationUrl = `${baseUrl}`;
    this.httpService = new HttpService();
  }
  async getUser(){
    try {
      const response = await this.httpService.get("/users", true);
      const result = await response.json();
      if(!result.error){
        return result;
      } else {
        throw new Error({message: result.error});
      }
    } catch (error) {
      throw new Error({message: result.error});
    }
  }
 }
