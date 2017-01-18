import { Injectable } from '@angular/core';

@Injectable()
export class TrainerService {
  constructor() {}
  getModelData(): Object {
    return [
      {
        name: 'Rambo',
        sport: 'BasketBall'
      },
      {
        name: 'Leonidas',
        sport: 'FootBall'
      },
      {
        name: 'Schwarzenegger',
        sport: 'Hockey'
      }
    ]
  }
}