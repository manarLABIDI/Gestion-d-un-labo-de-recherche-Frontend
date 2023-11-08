import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from '../models/Member';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  dataSource: MatTableDataSource<Member> = new MatTableDataSource<Member>([
    { id: '12233', cin: '6543278', name: 'manar', createdDate: '12/12/2020', cv: 'https://www.cdc.gov/polio/stop/pdf/stop-cv-format.pdf?fbclid=IwAR2Iv_59cNTcqXPHJ3ADmgPE1_BSye7m0ZxSfiJA0H55vnVsAuaADdiQ5oY', type: 'student' },
    { id: '565', cin: '6543278', name: 'ali', createdDate: '12/12/2020', cv: 'lien', type: 'teacher' },
    { id: '88', cin: '6543278', name: 'sabrine', createdDate: '12/12/2020', cv: 'lien', type: 'teacher' },
  ]);
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', '7'];
}
