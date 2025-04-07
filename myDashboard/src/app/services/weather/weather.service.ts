import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface WeatherResult{
  name: string | null;
  temperatureF: number | null;
  description: string | null;

}

//place any service details below -
//interface was created above
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //we have our weather service
  //so we'll reference the constructor and pass in the HttpClient
  //from the calling component
  constructor(private httpClient: HttpClient) { }


  //establish the method that the service will use to
  //call the .net web api
  getWeatherByZip(zipCode: string)
  {
      //we'll need to get the exact route for our weather service URL
      const url = `https://localhost:5055/api/Weather/${zipCode}`;

      //since we've got our URL & zip code from the caller,
      //we'll try to call our API using a standard HTTP get,
      //expecting to get '<any>' type of result back from our URL

      return this.httpClient.get<WeatherResult>(url);

  }




}
