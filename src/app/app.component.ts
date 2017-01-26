import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header">Carrot & Stick</header>
    <div class="router-outlet-wrapper">
      <router-outlet></router-outlet>
    </div>
    <footer class="page-footer"></footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
