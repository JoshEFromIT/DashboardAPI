import { Component, Output, EventEmitter } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { WeatherModalComponent } from "../weather-modal/weather-modal.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-retro-control-panel',
  standalone: true,
  imports: [LucideAngularModule, WeatherModalComponent, CommonModule, FormsModule],
  templateUrl: './retro-control-panel.component.html',
  styleUrls: ['./retro-control-panel.component.css']
})
export class RetroControlPanelComponent {

  showWeatherModal = false;
//we've got to put the event emitter here so it will
  //tie into the event in the template


  openWeatherModal() {
    this.showWeatherModal = true;
  }
  closeWeatherModal() {
    this.showWeatherModal = false;
  }


}
