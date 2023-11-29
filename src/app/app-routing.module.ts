import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { ArticleComponent } from './article/article.component';
import { EventsComponent } from './events/events.component';
import { ToolsComponent } from './tools/tools.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: MemberComponent },
  { path: 'members', pathMatch: 'full', component: MemberComponent },
  { path: ':id/edit', pathMatch: 'full', component: MemberFormComponent },
  { path: 'memberform', pathMatch: 'full', component: MemberFormComponent },
  { path: 'articles', pathMatch: 'full', component: ArticleComponent },
  { path: 'events', pathMatch: 'full', component: EventsComponent },
  { path: 'tools', pathMatch: 'full', component: ToolsComponent },
  { path: 'sign', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  
  { path: '**', pathMatch: 'full', redirectTo: 'members' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
