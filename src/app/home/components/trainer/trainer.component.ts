import { Component, Input } from '@angular/core';
import { Trainer } from '../../../shared/trainer.service'

@Component({
  selector: 'trainer',
  template: `
    <md-card class="trainer">
      <span class="name">{{trainer.name}}</span>
      <span class="sport">{{trainer.sport}}</span>
    </md-card>
  `,
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent {
  @Input() trainer: Trainer;
}