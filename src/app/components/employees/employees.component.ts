import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public  http:HttpClient,public router:Router) {

   }
   host:string;
   employees:any;
  ngOnInit() {
   this.host=getHost()+"/api/employees";
   console.log(this.host);
   this. getAllEmployees();  
  }


  getAllEmployees()
  {
    this.http.get(this.host).subscribe((response)=>{
       console.log("rep")
       console.log(response);
       this.employees=response;
       console.log(this.employees);
    });
  }
  seeDetailView(employee)
  {
    console.log("one employee is");
    console.log(employee);
    this.router.navigate(['/employees',employee.id]);
  }

}
