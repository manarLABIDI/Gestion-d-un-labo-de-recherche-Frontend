import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL } from '../app-config';
import { Observable } from 'rxjs';

import { Member } from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

tab: Member[]=GLOBAL._db.members;
constructor(private httpclient:HttpClient){}

saveMember(member:Member):Observable<void>{
    
  // this.httpclient.post<Member>("linktoRestAPI",member); si j'ai le backend
  const memberTosave={...member,id:Math.ceil(Math.random()*1000),
  createdDate:new Date ().toISOString()};

  
  this.tab.push(member);
  return new Observable((observer=>{observer.next()})) //e foset next vide car c'est un void 
}
getMemberById(idcourant: string): Observable<Member> {
  // return this.httpclient.get<Member>('linktoRestAPI'); // uncomment if you have a backend

  return new Observable((observer) => {
    observer.next(this.tab.find((item) => item.id === idcourant));
  });
}

}