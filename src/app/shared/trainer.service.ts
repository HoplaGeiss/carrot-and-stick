import { Injectable } from '@angular/core';

export class Trainer {
  constructor(public id: number, public name: string, public sport: string) { }
}

let TRAINERS = [
  new Trainer(1, 'Rambo', 'BasketBall'),
  new Trainer(2, 'Leonidas', 'FootBall'),
  new Trainer(3, 'Schwarzenegger', 'Hockey')
];
let trainersPromise = Promise.resolve(TRAINERS);

@Injectable()
export class TrainerService {
  getTrainers(){ return trainersPromise }

  getTrainer(id: number | string){
    return trainersPromise
      .then(trainers => trainers.find(trainer => trainer.id === +id));
  }
}