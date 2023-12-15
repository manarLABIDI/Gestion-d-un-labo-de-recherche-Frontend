import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../app-config';
import { Observable } from 'rxjs';
import { Event } from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) {}
  tab: Event[] = GLOBAL._db.events;

  eventToSave!: Event;



  saveEvent(event: any): Observable<void> {
    /*this.httpClient.post<Member>(
      'http://localhost:9000/MEMBRE-SERVICE',
      member
    );*/

    this.eventToSave = {
      ...event,
      id: event.id ?? Math.ceil(Math.random() * 10000),
      createdDate: event.createdDate ?? new Date().toISOString(),
    };
    this.tab = [
      this.eventToSave,
      ...this.tab.filter((item) => item.id != this.eventToSave.id),
    ];
    return new Observable((observer) => {
      observer.next();
    });
  }


  getAllEvents(): Observable<Event[]> {
    // return this.httpclient.get<Member[]>('localhot:9000/memeber-service/events');
    return new Observable((observer) => {
      observer.next(this.tab);
    });
  }
}
