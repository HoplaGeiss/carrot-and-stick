import { Component, Input } from '@angular/core';

@Component({
  selector: 'trainer',
  template: `
    <div class="trainer">
      <span>{{name}}</span>
      <span>{{sport}}</span>
    </div>
  `,
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent {
  @Input() name: string = '';
  @Input() sport: string = '';
}