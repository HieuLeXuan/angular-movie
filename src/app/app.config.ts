import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

import { tmdbReadAccessInterceptor } from './auth/tmdbReadAccessInterceptor.js';
import { tmdbContentTypeInterceptor } from './data-access/api/tmdbContentTypeInterceptor.js';
import { mergeBaseConfig } from './app.base.config.js';

const browserConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([tmdbContentTypeInterceptor, tmdbReadAccessInterceptor])
    ),
  ],
};

export const appConfig = () => mergeBaseConfig(browserConfig);
