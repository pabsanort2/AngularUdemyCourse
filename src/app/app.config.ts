import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  // We need to add provideToastr() and provideAnimations() here to provide it to a Angular standalone application
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideToastr()]
};
