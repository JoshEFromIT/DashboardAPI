import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//need to import the service & dto/interface definition
//from my service class
import { WeatherService, WeatherResult } from '../../services/weather/weather.service';

@Component({
  selector: 'app-weather-modal',
  imports: [CommonModule,FormsModule],
  templateUrl: './weather-modal.component.html',
  styleUrl: './weather-modal.component.css'
})
export class WeatherModalComponent {

  @Output() closeRequested = new EventEmitter<void>();
  //create a property for the zipCode that will be input
  zipCode: string = '';

  //create a property for our WeatherResult to reside in
  //once we get it back
  weatherResult?: WeatherResult;

  //setup the component constructor to receive
  //the weatherService on build
  constructor(private weatherService: WeatherService) { }


  //create our getWeather() method to call from the UI to
  //then go to the .net webAPI we'll create (weather service)
  getWeather() {

    //checks if the value is considered "truthy" or "falsy"
    //this is a new concept but in JS
    //there are values that are by default considered falsy (basically things that would be null)
    if (!this.zipCode) { return; }

    //our zip code isn't an empty string so reference
    //the local weatherService instance we got from DI and
    //call the method, passing in our user input


    //this statementn tells us to call the getWeatherByZip method
    //on our service and listens to our "observable"
    this.weatherService.getWeatherByZip(this.zipCode)
      //in RxJS, this tells our code what to
      //execute once the "flow" is open
      .subscribe({
        next: (data) => {
          //we'll need to put in our logic to receive the data
          //back from the call then display it in our component

          //assign what we got back into
          //our local definition
          this.weatherResult = data;

        },
        error: (err) => {
          //we'll need to adjust our logic/display
          //to handle invalid/missing responses from the web api
          console.error('Error in fetching weather: ${err}')
        }



      });
  }

  close() {
    this.closeRequested.emit();
  }


}
