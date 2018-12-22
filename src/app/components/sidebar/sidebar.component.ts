import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  title='Payroll';
  menuItems=[
     {
       name:'Dashboard',
       link:'/'
     },
     {
       name:'Employees',
       link:'/employees'
     },
     {
       name:'Units',
       link:'/units'
     },
     {
       name:'Packages',
       link:'/packages'
     },
     {
       name:'Designations',
       link:'/designations'
     },
     {
       name:'Production-attendance types',
       link:'/productionattendancetypes'
     },
     
   
    
    ]
  constructor() { }
  
  ngOnInit() {
  }

}
