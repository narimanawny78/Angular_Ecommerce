import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes , withComponentInputBinding()), provideHotToastConfig({ style: {marginTop:'70px'}, stacking: 'depth', duration: 1000 }) ,
    {
      provide: MAT_ICON_DEFAULT_OPTIONS,
      useValue:{
        appearance: 'outline',
        subscriptSixing: 'dynamic',
        floatLabel: 'never'
      }
    }
  ]
};
