import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';

const routes: Routes = [
  {path:'',component:MemberComponent},
  {path:'members', pathMatch:'full',component:MemberComponent},
  {path:'memberform', pathMatch:'full',component:MemberFormComponent},
  {path:'**',pathMatch:'full',redirectTo:'members'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
