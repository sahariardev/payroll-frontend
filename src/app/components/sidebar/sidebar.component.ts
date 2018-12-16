import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  title='Payroll';
  menuItems=['Dashboard','Employees','Attendence/Production','Units','Attendence/Production Type']
  constructor() { }
  
  ngOnInit() {
  }

}
