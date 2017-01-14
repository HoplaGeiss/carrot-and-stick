import { Component, Input } from '@angular/core';

@Component({
  selector: 'trainer',
  template: `
    <div class="trainer">
      <span>{{ name }}</span>
      <span>{{ speciality }}</span>
      <span>{{ location }}</span>
    </div>
  `,
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent {
  @Input() name: string = '';
  @Input() speciality: string = '';
  @Input() location: string = '';
}