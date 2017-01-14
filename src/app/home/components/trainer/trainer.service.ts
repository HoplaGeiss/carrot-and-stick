import { Injectable } from '@angular/core';

@Injectable()
export class TrainerService {
  constructor() {}
  getModelData(): Object {
    return [
      {
        name: 'John Papa',
        speciality: 'Footing',
        location: 'Milton Keynes',
        Price: '90'
      },
      {
        name: 'John Papa',
        speciality: 'Footing',
        location: 'Milton Keynes',
        Price: '90'
      },
      {
        name: 'John Papa',
        speciality: 'Footing',
        location: 'Milton Keynes',
        Price: '90'
      }
    ]
  }
}