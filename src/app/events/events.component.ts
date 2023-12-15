import { Component } from '@angular/core';
import { GLOBAL } from '../app-config';
import { MatTableDataSource } from '@angular/material/table';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';


import { EventService } from '../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  
  dataSource = new MatTableDataSource(this.ES.tab);
  displayedColumns: string[] = ['id', 'title', 'dateDebut', 'dateFin', 'lieu'];

  constructor(private ES: EventService ){}
 

  ngOnInit() {
    this.fetch()
  }
  

  fetch(): void {
    this.ES.getAllEvents().subscribe((events) => {
      this.dataSource.data = events;
    });
  }

 

  

}
