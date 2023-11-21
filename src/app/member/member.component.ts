import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from '../models/Member';
import { GLOBAL } from '../app-config';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  dataSource: any[] = GLOBAL._db.members;
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'action'];
}
