import AsyncStorage from '@react-native-async-storage/async-storage';

export class HttpService {
  baseUrl = "https://api.proathletesoutreach.org"
  async buildHeaders(needsToken){
    // const myHeaders = new Headers();
    // myHeaders.append("x-api-key", "PAOApiAccess key=1fe9ab83-16e5-4c64-9234-4754ea072340");
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Accept", "application/json");
    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      "Accept": "application/json",
      "x-api-key": "PAOApiAccess key=1fe9ab83-16e5-4c64-9234-4754ea072340",
    };
    if(needsToken){
      const token = await AsyncStorage.getItem('@token');
      console.log('TOKEN http: ',token)
      headers['Authorization'] = `Bearer ${token}`;
    }
    console.log(headers);
    return headers;
  }
  async get(
    path,
    authenticationNeeded=false,
    options,
  ) {
    // const ipAddress: string = await publicIp.v4({
    //   fallbackUrls: [ "https://ifconfig.co/ip" ]
    // })
    const apiHeaders = await this.buildHeaders(authenticationNeeded);
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: apiHeaders,
    });
    switch (response.status) {
    //   case 401:
    //     this.authService.logout();
      case 500:
      case 404:
      case 400:
        throw response;
    }
    return response;
  }

  async post(
    path,
    data,
    authenticationNeeded = false,
  ) {
    if (authenticationNeeded) {
      this.logOutIfIsNotAuthenticated();
    }
    // const ipAddress: string = await publicIp.v4({
    //   fallbackUrls: [ "https://ifconfig.co/ip" ]
    // })
    const apiHeaders = await this.buildHeaders(authenticationNeeded);
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: apiHeaders,
      body: JSON.stringify(data),
      method: 'POST',
      redirect: 'follow'
    });
    switch (response.status) {
    //   case 401:
    //     this.authService.logout();
      case 500:
      case 404:
      case 400:
        throw response;
    }
    return response;
  }

  async put(
    path,
    data,
    authenticationNeeded = false
  ) {
    const apiHeaders = await this.buildHeaders(authenticationNeeded);

    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: apiHeaders,
      body: JSON.stringify(data),
      method: 'PUT',
    });
    switch (response.status) {
    //   case 401:
    //     this.authService.logout();
      case 500:
      case 404:
      case 400:
        throw response;
    }
    return response;
  }

  async delete(path, data, authenticationNeeded = false) {
    const apiHeaders = await this.buildHeaders(authenticationNeeded);
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: apiHeaders,
      body: data? JSON.stringify(data) : null,
      method: 'DELETE',
    });
    switch (response.status) {
    //   case 401:
    //     this.authService.logout();
      case 500:
      case 404:
      case 400:
        throw response;
    }
    return response;
  }

   logOutIfIsNotAuthenticated() {
    // if (!this.authService.isAuthenticated()) {
    //   this.authService.logout();
    // }
  }

//    getQueryStringFromParams(): {
//     let queryString = '?';
//     queryString += Object.keys(params)
//       .map((key) => {
//         const value = params[key];
//         if (!value || value === 'undefined' || typeof value === 'object') {
//           return '';
//         }
//         return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
//       })
//       .join('&');
//     return queryString;
//   }
}
