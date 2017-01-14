import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">
    </header>
    <div class="wrapper">
      <trainer-list></trainer-list>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}