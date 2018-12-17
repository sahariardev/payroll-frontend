import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public  http:HttpClient) {

   }
   host:string;
  ngOnInit() {
   this.host=getHost()+"/api/employees";
   console.log(this.host);
   this. getAllEmployees();  
  }


  getAllEmployees()
  {
    this.http.get(this.host).subscribe((response)=>{
       console.log("rep")
       console.log(response)
    });
  }

}
