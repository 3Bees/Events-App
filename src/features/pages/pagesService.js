import { HttpService } from "../../apiServices/httpService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class PagesService {

  constructor(baseUrl = process.env.API_URL) {
    this.AuthenticationUrl = `${baseUrl}`;
    this.httpService = new HttpService();
  }
  async getAboutUsPage(){
    try {
      const response = await this.httpService.get("/pages/about", false);
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }
  async getTermsAndConditionsPage(){
    try {
      const response = await this.httpService.get("/pages/terms-of-use", false);
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }
  async getHelpPage(){
    try {
      const response = await this.httpService.get("/pages/help", false);
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }
  async getHomePage(){
    try {
      const response = await this.httpService.get("/pages/home", true);
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }
  async getHomeVideo(videoId){
    try {
      const response = await fetch(`https://player.vimeo.com/video/${videoId}/config`);
      const result = await response.json();
      const videoUrl = result.request.files.hls.cdns[result.request.files.hls.default_cdn].url;
      return videoUrl;
    } catch (error) {
      return '';
    }
  }
  async getResourceInfo(slug){
    try {
      const response = await this.httpService.get(`/resources/${slug}`, true);
      const result = await response.json();
      return result;
    } catch (error) {
      return '';
    }
  }
  async getLoggedOutImages(){
    try {
      const response = await this.httpService.get(`/collections/home_page_content_logged_out`, false);
      const result = await response.json();
      return result;
    } catch (error) {
      return [];
    }
  }
 }
