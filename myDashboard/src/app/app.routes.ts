import { Routes } from '@angular/router';
//import our additional dashboard components
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [{
    //set the default path
    path:'', 
    //set the component for that path to our dashboard
    component: DashboardComponent
}];
