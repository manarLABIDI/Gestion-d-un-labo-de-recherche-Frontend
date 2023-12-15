import { Component } from '@angular/core';
import { MemberService } from '../services/member-service.service';
import { EventService } from '../services/event.service';
import { ArticleService } from '../services/article.service';
import { ToolService } from '../services/tool.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nb_Members: number = 0;
  nb_Articles: number = 0; 
  nb_Tools: number = 0;     
  nb_Events: number = 0;
  nb_teacher : number =0;
  nb_student : number =0;
  constructor(private MS: MemberService, private ES: EventService, private AS: ArticleService, private TS: ToolService){
    this.nb_Members=this.MS.tab.length;
    this.nb_Events=this.ES.tab.length;
    this.nb_Articles=this.AS.tab.length;
    this.nb_Tools= this.TS.tab.length;
    for (let i = 0; i < this.nb_Members; i++) {
      this.chartLabels.push(this.MS.tab[i].name);
    }

  }
  chartData: ChartDataset[] = [
    {
      label: '$ in millions',
      data: this.getNumber(),
    },
  ];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {};

  chartData2: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions', 
      data: [1551, 1688, 1800, 1895, 2124, 2124],
    },
  ];
  chartLabels2: string[] = [];
  chartOptions2: ChartOptions = {};
  tab:number[]=[];
  getNumber(){
    this.MS.getNBPubMembers().subscribe((x)=>{this.tab=x})
    return this.tab;
  }

  getStudentTeacher(): void{
    
  }

  

}
