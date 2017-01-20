import { Component, OnInit } from '@angular/core';

import { SportService } from '../../shared/sport.service';
import { SearchedTagsService } from '../../shared/searched-tags.service';


@Component({
  selector: 'search-inputs',
  template: `
    <div class="search-inputs">
      <rl-tag-input
        [addOnBlur]="false"
        [autocomplete]="true"
        [autocompleteItems]="sports"
        [(ngModel)]="sportSearchedTags"
        placeholder="Add a sport"
        (ngModelChange)="onChange($event)">
      </rl-tag-input>
    </div>
  `,
  styleUrls: ['./search-inputs.component.scss']
})
export class SearchInputsComponent implements OnInit{
  sports: any;
  sportSearchedTags: string[] = [];

  constructor(private sportService: SportService,  private searchedTagsService: SearchedTagsService) {}

  ngOnInit() {
    this.sports = this.sportService.getModelData();



  }

  onChange(tags) {
    this.searchedTagsService.sendMessage(tags);
  }

}