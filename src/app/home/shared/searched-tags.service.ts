import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchedTagsService {
  private subject = new Subject<any>();

  setTags(tags: string) {
    this.subject.next(tags);
  }

  getTags(): Observable<any> {
    return this.subject.asObservable();
  }
}