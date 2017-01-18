import { Injectable } from '@angular/core';

@Injectable()
export class SportService {
  constructor() {}
  getModelData(): Object {
    return [
      'BasketBall',
      'FootBall',
      'Hockey',
    ];
  }
}