import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';

import localeAr from '@angular/common/locales/ar';
import localeArExtra from '@angular/common/locales/extra/ar';
import { registerLocaleData } from '@angular/common';
import { Resources } from './resources';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocaleHelper } from './locale.helper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useFactory: () => LocaleHelper.getCurrentLocale()
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Pre-load all the needed locales.
    registerLocaleData(localeEs, 'es', localeEsExtra);
    registerLocaleData(localeAr, 'ar', localeArExtra);

    // There are other ways to loads a module dynamically.
    import( `../assets/resources.${LocaleHelper.getCurrentLocale().toLowerCase()}.js`).then((r) => {

      // Load `Resources` with values.
      for (const key in r.resources) {
        if (r.resources.hasOwnProperty(key)) {
          Resources[key] = r.resources[key];
        }
      }

      // Is the current language right to left?
      document.documentElement.dir = Resources.RightToLeft;
    });
  }
}
