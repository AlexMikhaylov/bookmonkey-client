import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bookmonkey-client';

  constructor() {
    setTimeout(() => {
      this.title = 'Alex'
    }, 3000)
  }
}
