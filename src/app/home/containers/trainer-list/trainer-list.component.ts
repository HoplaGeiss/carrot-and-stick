import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trainer, TrainerService } from '../../../shared/trainer.service';
import { SearchedTagsService } from '../../shared/searched-tags.service';


@Component({
  selector: 'trainer-list',
  template: `
    <div class="trainer-list" *ngIf="trainers">
      <div *ngFor="let trainer of trainers | criteria:'sport':sportSearch"
           (click)="onSelect(trainer)">
        <trainer [name]="trainer.name"
                 [sport]="trainer.sport">
        </trainer>
      </div>
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
    this.getTrainers();

    this.searchedTagsService.getTags()
      .subscribe(tags => {
        this.sportSearch = tags.slice();
      });
  }

  getTrainers(): void {
    this.trainerService
      .getTrainers()
      .then(trainers => this.trainers = trainers);
  }

  onSelect(trainer) {
    this.router.navigate(['/trainer', trainer.id]);
  }
}