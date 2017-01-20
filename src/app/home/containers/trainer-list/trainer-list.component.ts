import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";

import { TrainerService } from '../../shared/trainer.service';
import { SearchedTagsService } from '../../shared/searched-tags.service';


@Component({
  selector: 'trainer-list',
  template: `
    <div class="trainer-list">
      <md-card *ngFor="let trainer of trainers | criteria:'sport':sportSearch">
        <trainer [name]="trainer.name"></trainer>
        <trainer [sport]="trainer.sport"></trainer>
      </md-card>
    </div>
  `,
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit{
  trainers: any;
  subscription: Subscription;
  sportSearch: string[] = [];

  constructor(private trainerService: TrainerService, private searchedTagsService: SearchedTagsService) {}

  ngOnInit() {
    this.trainers = this.trainerService.getModelData();

    this.subscription = this.searchedTagsService.getMessage()
      .subscribe(tags => {
        //console.log(tags);
        this.sportSearch = tags;
        console.log('change received')
        console.log(this.sportSearch);

      });
  }
}