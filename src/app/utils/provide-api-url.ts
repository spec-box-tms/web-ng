import { Provider } from '@angular/core';
import { ApiConfiguration } from '../../api/api-configuration';

export const provideApiUrl = (url: string): Provider => ({
  provide: ApiConfiguration,
  useValue: { rootUrl: url },
});
