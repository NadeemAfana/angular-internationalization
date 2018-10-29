import { Component } from '@angular/core';
import { LocalizedComponent } from './localized.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends LocalizedComponent {
}
