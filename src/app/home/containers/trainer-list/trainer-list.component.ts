import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../../components/trainer/trainer.service';

@Component({
  selector: 'trainer-list',
  template: `
    <div>
      <ul>
        <li *ngFor="let trainer of trainers">
          <trainer [name]="trainer.name"
                   [speciality]="trainer.speciality"
                   [location]="trainer.location">
          </trainer>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {
  trainers: any;

  constructor(private trainerService: TrainerService) {}

  ngOnInit() {
    this.trainers = this.trainerService.getModelData();
  }

}