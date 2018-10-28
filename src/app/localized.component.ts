import { Resources } from './resources';
import { LOCALE_ID, Inject } from '@angular/core';

export class LocalizedComponent {
    public resources = Resources;
    public localeId: string = null;

    constructor(@Inject(LOCALE_ID) public locale: string) {
        this.localeId = locale;
      }
}
