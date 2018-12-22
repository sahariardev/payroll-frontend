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
       name:'Attendence/Production',
       link:'/'
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
       name:'Attendence/Production Type',
       link:'/'
     }
   
    
    ]
  constructor() { }
  
  ngOnInit() {
  }

}
