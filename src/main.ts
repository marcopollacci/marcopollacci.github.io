import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as Sentry from '@sentry/angular';

if (environment.production) {
  enableProdMode();
}

Sentry.init(environment.sentry);

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if (environment.production) {
    registerServiceWorker();
  }
}).catch(err => console.log(err));


function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(reg => {
        console.log('[App] Successful service worker registration', reg);
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker.state === 'installing') {
            location.reload();
          }
          newWorker.addEventListener('statechange', () => {
          });
        });
      })
      .catch(err =>
        console.error('[App] Service worker registration failed', err)
      );
    });
  } else {
    console.error('[App] Service Worker API is not supported in current browser');
  }
}
