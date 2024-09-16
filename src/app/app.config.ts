import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  ApplicationConfig,
  provideZoneChangeDetection,
  signal,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideApiUrl } from './utils/provide-api-url';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import {
  tuiButtonOptionsProvider,
  tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';
import { provideAuthBypass } from './utils/provide-auth-bypass';
import { AuthInterceptor } from './auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideApiUrl('http://localhost:8080/api'),
    provideAuthBypass(['/auth']),
    tuiTextfieldOptionsProvider({
      size: signal('s'),
    }),
    tuiButtonOptionsProvider({
      size: 's',
    }),
    NG_EVENT_PLUGINS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
};
