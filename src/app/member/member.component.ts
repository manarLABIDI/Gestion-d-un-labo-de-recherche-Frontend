import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from '../models/Member';
import { GLOBAL } from '../app-config';
import { MemberService } from '../services/member-service.service';




@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  constructor(private MS:MemberService ){}
  dataSource!: any[] ;
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'action'];

  ngOnInit() {
    this.fetch()
  }
  

  fetch(): void {
    this.MS.getAllMembers().subscribe((members) => {
      this.dataSource = members;
    });
  }
  
  onDelete(memberId: string): void {
    this.MS.deleteMember(memberId).subscribe(() => {
      this.fetch();
    });
  }
  
}
