import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trainer, TrainerService } from '../../../shared/trainer.service';
import { SearchedTagsService } from '../../shared/searched-tags.service';


@Component({
  selector: 'trainer-list',
  template: `
    <div class="trainer-list" *ngIf="trainers">
      <md-card 
        *ngFor="let trainer of trainers | criteria:'sport':sportSearch"
        (click)="onSelect(trainer)">
        <trainer [name]="trainer.name"></trainer>
        <trainer [sport]="trainer.sport"></trainer>
      </md-card>
    </div>
  `,
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit{
  trainers: Trainer[];
  sportSearch: string[] = [];

  constructor(
    private trainerService: TrainerService,
    private searchedTagsService: SearchedTagsService,
    private router: Router
  ) {}

  ngOnInit() {

    this.trainerService.getTrainers()
      .subscribe(trainers => {
        this.trainers = trainers;
      });

    this.searchedTagsService.getTags()
      .subscribe(tags => {
        this.sportSearch = tags.slice();
      });
  }

  onSelect(trainer) {
    this.router.navigate(['/trainer', trainer.id]);
  }
}