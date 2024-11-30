import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([
      //TODO add interceptor
    ])),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
};
