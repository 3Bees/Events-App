import { HttpService } from "../../apiServices/httpService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class EventsService {

  constructor(baseUrl = process.env.API_URL) {
    this.AuthenticationUrl = `${baseUrl}`;
    this.httpService = new HttpService();
  }
  async getEvents(){
    try {
      const response = await this.httpService.get("/events", true);
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }
  async getEvent(event){
    try {
      const response = await this.httpService.get(`/events/${event}?grouped_sessions_by_time=true`, true);
      const result = await response.json();
      console.log('event: ', result);
      return result;
    } catch (error) {
      const errorMessage = await error.json();
      console.log(errorMessage)
      return [];
    }
  }
  async getEventSession(sessionObject){
    try {
      const {event, session} = sessionObject;
      const response = await this.httpService.get(`/events/${event}/session/${session}`, true);
      const result = await response.json();
      console.log('session: ', result);
      return result;
    } catch (error) {
      const errorMessage = await error.json();
      console.log(errorMessage)
      return null;
    }
  }
 }
