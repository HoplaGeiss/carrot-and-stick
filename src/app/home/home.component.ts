import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="home">
      <search-inputs></search-inputs>
      <trainer-list></trainer-list>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

}