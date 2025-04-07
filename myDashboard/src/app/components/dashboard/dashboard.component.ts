import { Component } from '@angular/core';
import { RetroControlPanelComponent } from "../retro-control-panel/retro-control-panel.component";

@Component({
  selector: 'app-dashboard',
  imports: [RetroControlPanelComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
