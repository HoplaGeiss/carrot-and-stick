import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class Trainer {
  constructor(public id: number, public name: string, public sport: string) { }
}

@Injectable()
export class TrainerService{

  constructor(private http: Http) {}

  getTrainer(id: number): Promise<Trainer> {
    return this.http
      .get(`api/trainers/${id}`)
      .toPromise()
      .then(response => response.json().data as Trainer)
      .catch(this.handleError);
  }

  getTrainers(): Promise<Trainer[]> {
    return this.http
      .get(`api/trainers`)
      .toPromise()
      .then(response => response.json().data as Trainer[])
      .catch(this.handleError);
  }

  search(term: string): Observable<Trainer[]> {
    return this.http
      .get(`api/trainers/?name=${term}`)
      .map((r: Response) => r.json().data as Trainer[]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}