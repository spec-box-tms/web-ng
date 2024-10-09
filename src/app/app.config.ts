import {
  ApplicationConfig,
  provideZoneChangeDetection,
  signal,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';

import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  tuiButtonOptionsProvider,
  tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';
import { routes } from './app.routes';
import { AuthInterceptor } from './auth/auth.interceptor';
import { provideApiUrl } from './utils/provide-api-url';
import { provideAuthBypass } from './utils/provide-auth-bypass';
import { provideMarkdown } from 'ngx-markdown';
import { provideMonaco } from './utils/provide-monaco';

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
    provideHttpClient(withInterceptorsFromDi()),
    NG_EVENT_PLUGINS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // provideMarkdown(),
    provideMonaco(),
  ],
};
