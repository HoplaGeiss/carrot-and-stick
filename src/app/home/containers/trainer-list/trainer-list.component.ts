import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Trainer, TrainerService } from '../../../shared/trainer.service';
import { SearchedTagsService } from '../../shared/searched-tags.service';


@Component({
  selector: 'trainer-list',
  template: `
    <div class="trainer-list" *ngIf="trainers">
      <md-card 
        *ngFor="let trainer of (trainers | async) | criteria:'sport':sportSearch"
        (click)="onSelect(trainer)">
        <trainer [name]="trainer.name"></trainer>
        <trainer [sport]="trainer.sport"></trainer>
      </md-card>
    </div>
  `,
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit{
  trainers: Observable<Trainer[]>;
  subscription: Subscription;
  sportSearch: string[] = [];

  constructor(
    private trainerService: TrainerService,
    private searchedTagsService: SearchedTagsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {

    this.trainers = this.route.params
      .switchMap(() => {
        return this.trainerService.getTrainers();
      });

    this.subscription = this.searchedTagsService.getTags()
      .subscribe(tags => {
        this.sportSearch = tags.slice();
      });
  }

  onSelect(trainer) {
    this.router.navigate(['/trainer', trainer.id]);
  }
}