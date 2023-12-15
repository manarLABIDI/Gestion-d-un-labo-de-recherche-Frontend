import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../services/event.service';
import { Event } from '../models/Event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {
  range!: FormGroup;

  EventGlobal!: Event;
  Event2!: Event;
 

  constructor(private ES: EventService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.initForm();
  }

  initForm(): void {
    this.range = this.fb.group({
      title: [null, Validators.required],
      lieu: [null, Validators.required],
      dateDebut: new FormControl<Date | null>(null),
      dateFin: new FormControl<Date | null>(null),
    });
  }

  OnSub(): void {
    console.log(this.range.value);

    const event = { ...this.EventGlobal, ...this.range.value };
    this.Event2 = {
      ...event,
      id: event.id ?? Math.ceil(Math.random() * 1000),
      createdDate: new Date().toISOString()
    };
    this.ES.saveEvent(event).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }

}
