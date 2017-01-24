import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Trainer, TrainerService }  from '../shared/trainer.service';

@Component({
  selector: 'trainer-profile',
  template: `
    <div class="trainer-profile">
      <h1>trainer profile</h1>
      <div *ngIf="trainer">
        <h2>{{ trainer.name }}</h2>
      </div>  
    </div>
  `,
  styleUrls: ['./trainer-profile.component.scss']
})
export class TrainerProfileComponent implements OnInit{
  trainer: Trainer;

  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getTrainer(+params['id']);
    });
  }

  getTrainer(id: number): void {
    this.trainerService
      .getTrainer(id)
      .then(trainer => this.trainer = trainer);
  }
}