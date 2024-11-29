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
    this.experienceData = [
      {title: "Information Security Analyst", year:"2024",organization:"First Canadian Title", location:"Greater Toronto Area, Canada"},
      {title: "Senior Software Engineer", year:"2023",organization:"Optum - United Health Group", location:"Hyderabad, India"},
      {title: "Senior Consultant I", year:"2022",organization:"Neudesic - an IBM Company", location:"Hyderabad, India"},
      {title: "Consultant II", year:"2021",organization:"Neudesic - an IBM Company", location:"Hyderabad, India"},
      {title: "Consultant I", year:"2020",organization:"Neudesic - an IBM Company", location:"Hyderabad, India"},
      {title: "Associate Consultant", year:"2018",organization:"Neudesic - an IBM Company", location:"Bangalore, India"}
    ];
  }
  skillsData: any [] = [];
  experienceData: any [] = [];
  coverPhoto = '/public/ashwith.png';
  
}
