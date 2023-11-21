import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form: FormGroup = this.fb.group({}); 

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
   
  }

 
}
