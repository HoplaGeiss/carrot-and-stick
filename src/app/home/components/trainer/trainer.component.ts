import { Component, Input } from '@angular/core';

@Component({
  selector: 'trainer',
  template: `
    <md-card class="trainer">
      <span class="name">{{name}}</span>
      <span class="sport">{{sport}}</span>
    </md-card>
  `,
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent {
  @Input() name: string = '';
  @Input() sport: string = '';
}