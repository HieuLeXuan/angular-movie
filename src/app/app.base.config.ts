import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import {
  provideRouter,
  withDisabledInitialNavigation,
  withInMemoryScrolling,
} from '@angular/router';

import { routes } from './app.routes';
import { withGlobalStateInitializer } from './state/state-app-initializer.provider';

const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(
      routes,
      // withDebugTracing(),
      /**
       * **🚀 Perf Tip for TBT:**
       *
       * Disable initial sync navigation in router config and schedule it in router-outlet container component
       */
      withDisabledInitialNavigation(),
      withInMemoryScrolling({
        /**
         * **💡 UX Tip for InfiniteScroll:**
         *
         * Reset scroll position to top on route change, users could be
         * irritated starting a new list from the bottom of the page.
         *
         * also: otherwise infinite scroll isn't working properly
         */
        scrollPositionRestoration: 'top',
      })
    ),
    withGlobalStateInitializer(),
  ],
};

export function mergeBaseConfig(...configs: ApplicationConfig[]) {
  return mergeApplicationConfig(appConfig, ...configs);
}
