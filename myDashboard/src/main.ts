// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { LucideAngularModule } from 'lucide-angular';
import {provideHttpClient} from '@angular/common/http';

import {
    Play,
    Square,
    RotateCw,
    AlarmClock,
    CloudSunRain
} from 'lucide';
import { importProvidersFrom } from '@angular/core';



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    [importProvidersFrom(LucideAngularModule.pick({Play, Square, RotateCw, AlarmClock, CloudSunRain}))]
  ]
});
