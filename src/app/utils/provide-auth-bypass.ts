import { InjectionToken, Provider } from '@angular/core';

export const AUTH_BYPASS = new InjectionToken<string[]>(
  'Authorization bypass endpoints'
);

export const provideAuthBypass = (endpoints: string[]): Provider => ({
  provide: AUTH_BYPASS,
  useValue: endpoints,
});
