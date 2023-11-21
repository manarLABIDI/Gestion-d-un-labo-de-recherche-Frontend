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
saveMember(member:any):Observable<void>{
  
// this.httpclient.post<Member>("linktoRestAPI",member);
const memberTosave={...member,
  id:Math.ceil(Math.random()*1000)
  ,createdDate:new Date ().toISOString()};

this.tab=[memberTosave,...this.tab.filter(item=>item.id!=memberTosave.id)]
return new Observable((observer=>{observer.next()}))
}
}