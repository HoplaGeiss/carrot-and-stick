import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

export class Trainer {
  constructor(public id: number, public name: string, public sport: string) { }
}

@Injectable()
export class TrainerService{

  constructor(private http: Http) {}

  getTrainer(id: number): Observable<Trainer> {
    return this.http
      .get(`api/trainers/${id}`)
      .map((r: Response) => r.json().data as Trainer);
  }

  getTrainers(): Observable<Trainer[]> {
    return this.http
      .get(`api/trainers`)
      .map((r: Response) => r.json().data as Trainer[]);
  }
}