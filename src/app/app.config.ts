import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptors} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {authInterceptor} from './auth/interceptors/auth.interceptor';
import {errorInterceptor} from './core/interceptors/error.interceptor';
import {requestProgressInterceptor} from './core/interceptors/request-progress.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    provideZoneChangeDetection(
      { eventCoalescing: true }
    ),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([authInterceptor, errorInterceptor, requestProgressInterceptor]),
      withFetch()
    ),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          }
        }
      }
    })
  ]
};
