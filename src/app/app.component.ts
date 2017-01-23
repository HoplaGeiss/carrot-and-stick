import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header"></header>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
