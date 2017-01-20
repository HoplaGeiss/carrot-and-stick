import { Component, OnInit } from '@angular/core';
import { SearchedTagsService } from './shared/searched-tags.service';

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
export class HomeComponent implements OnInit{

  constructor(private searchedTagsService: SearchedTagsService) {}

  ngOnInit() {
  }
}