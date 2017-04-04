/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SportService } from '../../shared/sport.service';
import { SearchInputsComponent } from './search-inputs.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('SearchInputsComponent', () => {
  let sportServiceStub: any;
  let fixture: ComponentFixture<SearchInputsComponent>;
  let comp: SearchInputsComponent;
  //let trainerName: DebugElement;
  //let expectedTrainer: Trainer;
  //let trainerSport: DebugElement;

  beforeEach(() => {
    sportServiceStub = {
      getModelData(): Object {
        return [
          'BasketBall',
          'FootBall',
          'Hockey',
        ];
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        SearchInputsComponent,
      ],
      providers: [
        { provide: SportService, useValue: sportServiceStub}
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(SearchInputsComponent);
    comp = fixture.componentInstance;

    sportServiceStub = TestBed.get(sportServiceStub);
  });

  it('should display trainer name and sport', () => {
    //expect(trainerName.nativeElement.textContent).toContain('John');
    //expect(trainerSport.nativeElement.textContent).toContain('Hockey');
  });
});
