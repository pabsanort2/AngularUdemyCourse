import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // We need to add provideToastr() and provideAnimations() here to provide it to a Angular standalone application
  // Also we need to add provideHttpClient() provider for the http requests to work. Since we have a standalone app made of components and not modules, we need to do this instead of
  // what is done in the course
  providers: [provideRouter(routes), provideClientHydration(), provideAnimations(), provideToastr(), provideHttpClient(withFetch())]
};
