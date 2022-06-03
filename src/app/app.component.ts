import { Component } from '@angular/core';

import { AppStore } from './store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppStore],
})
export class AppComponent {
  title = 'movieper';
}
