import { Injectable } from '@angular/core';

@Injectable()
export class TrainerService {
  constructor() {}
  getModelData(): Object {
    return [
      {
        name: 'Rambo',
        sport: 'Bear fighting'
      },
      {
        name: 'Sparta',
        sport: 'Persian fighting'
      }
    ]
  }
}