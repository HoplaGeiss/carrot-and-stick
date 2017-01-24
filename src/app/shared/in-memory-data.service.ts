import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let trainers = [
      {id: 11, name: 'Mr. Nice', sport: 'BasketBall'},
      {id: 12, name: 'Narco', sport: 'BasketBall'},
      {id: 13, name: 'Bombasto', sport: 'BasketBall'},
      {id: 14, name: 'Celeritas', sport: 'BasketBall'},
      {id: 15, name: 'Magneta', sport: 'BasketBall'},
      {id: 16, name: 'RubberMan', sport: 'FootBall'},
      {id: 17, name: 'Dynama', sport: 'Hockey'},
      {id: 18, name: 'Dr IQ', sport: 'FootBall'},
      {id: 19, name: 'Magma', sport: 'FootBall'},
      {id: 20, name: 'Tornado', sport: 'BasketBall'}
    ];
    return {trainers};
  }
}