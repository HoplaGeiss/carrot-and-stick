import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header"></header>
    <div class="wrapper">
      <search-inputs></search-inputs>
      <trainer-list></trainer-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
