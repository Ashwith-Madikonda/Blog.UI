import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  constructor() {
    this.skillsData = [
      {skillName: "C#", image:'CSharp.png'},
      {skillName: "Java Script", image:"js.png"},
      {skillName: ".NET", image:"DotNet.jpg"},
      {skillName: "Angular", image:"Angular.png"},
      {skillName: "HTML", image:"html.png"},
      {skillName: "CSS", image:"css.png"},    
      {skillName: "Azure", image:"azure.png"},
      {skillName: "SQL Server", image:"sql.png"},
      {skillName: "Git", image:"git.png"},
    ];
  }
  skillsData: any [] = [];
  coverPhoto = '/public/ashwith.png';
  
}
