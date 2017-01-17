import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../components/trainer/trainer.service';


@Component({
  selector: 'trainer-list',
  template: `
    <div class="trainer-list">
      <md-card *ngFor="let trainer of trainers">
        <trainer [name]="trainer.name"></trainer>
        <trainer [sport]="trainer.sport"></trainer>
      </md-card>
    </div>
  `,
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit{
  trainers: any;

  constructor(private trainerService: TrainerService) {}

  ngOnInit() {
    this.trainers = this.trainerService.getModelData();
  }
}