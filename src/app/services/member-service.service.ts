import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../app-config';
import { Observable } from 'rxjs';

import { Member } from '../models/Member';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor(private httpClient: HttpClient) {}
  tab: Member[] = GLOBAL._db.members;
  memberToSave!: Member;
 
  saveMember(member: any): Observable<void> {
    /*this.httpClient.post<Member>(
      'http://localhost:9000/MEMBRE-SERVICE',
      member
    );*/

    this.memberToSave = {
      ...member,
      id: member.id ?? Math.ceil(Math.random() * 10000),
      createdDate: member.createdDate ?? new Date().toISOString(),
    };
    this.tab = [
      this.memberToSave,
      ...this.tab.filter((item) => item.id != this.memberToSave.id),
    ];
    return new Observable((observer) => {
      observer.next();
    });
  }

  getMemberById(idCourant: String): Observable<Member> {
    /*this.httpClient.get<Member>(
      'http://localhost:9000/MEMBRE-SERVICE/fullmember/'+idCourant,
    );*/

    return new Observable((observer) => {
      observer.next(this.tab.find((item) => item.id == idCourant));
    });
  }

  deleteMember(id: string): Observable<void> {
    // Implement your delete logic, e.g., send a delete request to the backend
    // return this.httpclient.delete<void>('linktoRestAPI');
    this.tab = this.tab.filter((item) => item.id !== id);
    return new Observable((observer) => {
      observer.next();
    });
  }
  getAllMembers(): Observable<Member[]> {
    // return this.httpclient.get<Member[]>('localhot:9000/memeber-service/members');
    return new Observable((observer) => {
      observer.next(this.tab);
    });
  }
  

  
  


}