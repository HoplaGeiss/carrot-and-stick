/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrainerComponent } from './trainer.component';
import { NO_ERRORS_SCHEMA, DebugElement } from "@angular/core";
import { Trainer } from '../../../shared/trainer.service';
import { By} from "@angular/platform-browser";
import { async } from '@angular/core/testing';


fdescribe('TrainerComponent', () => {
  let fixture: ComponentFixture<TrainerComponent>;
  let comp: TrainerComponent;
  let trainerName: DebugElement;
  let expectedTrainer: Trainer;
  let trainerSport: DebugElement;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [
        TrainerComponent,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(TrainerComponent);
    comp = fixture.componentInstance;
    trainerName = fixture.debugElement.query(By.css('.name'));
    trainerSport = fixture.debugElement.query(By.css('.sport'));

    expectedTrainer = new Trainer(3, 'John', 'Hockey');
    comp.trainer = expectedTrainer;
    fixture.detectChanges();
  }));

  it('should display trainer name and sport', () => {
    expect(trainerName.nativeElement.textContent).toContain('John');
    expect(trainerSport.nativeElement.textContent).toContain('Hockey');
  });
});
