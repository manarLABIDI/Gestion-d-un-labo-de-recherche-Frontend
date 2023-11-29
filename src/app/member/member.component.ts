import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Member } from '../models/Member';
import { GLOBAL } from '../app-config';
import { MemberService } from '../services/member-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';




@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate', 'cv', 'type', 'action'];
  dataSource = new MatTableDataSource(this.MS.tab);

  constructor(private MS:MemberService, private dialog: MatDialog ){}
  

  ngOnInit() {
    this.fetch()
  }
  

  fetch(): void {
    this.MS.getAllMembers().subscribe((members) => {
      this.dataSource.data = members;
    });
  }
  //lancer la boite 
  onDelete(memberId: string): void {
    let dialogRef = this.dialog.open(ConfirmdialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((x)=>{
      if (x)
       this.MS.deleteMember(memberId).subscribe(()=>{ this.fetch()})
    })
    //attendre le resultat
    
  
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
