import { Component, OnInit } from '@angular/core';

import { SportService } from '../../shared/sport.service';

@Component({
  selector: 'search-inputs',
  template: `
    <div class="search-inputs">
      <rl-tag-input
        [addOnBlur]="false"
        [autocomplete]="true"
        [autocompleteItems]="sports"
        [(ngModel)]="autocompleteTags"
        placeholder="Add a sport">
      </rl-tag-input>
    </div>
  `,
  styleUrls: ['./search-inputs.component.scss']
})
export class SearchInputsComponent implements OnInit{
  sports: any;

  public autocompleteTags = [];

  constructor(private sportService: SportService) {}

  ngOnInit() {
    this.sports = this.sportService.getModelData();
  }
}