import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  animations:[
    trigger('popOverState',[
       state('show',style({
         opacity:1,
         display:'inline-block'

       })),
       state('hide',style({
         opacity:0,
         display:'none'
       })),
       transition('show=>hide', animate('600ms ease-out')),
       transition('hide=>show', animate('600ms ease-in')),     

    ])
  ] 
})
export class EmployeesComponent implements OnInit {
  
  show=false;
  constructor(public  http:HttpClient,public router:Router) {

   }
   host:string;
   employees:any;
  ngOnInit() {
   this.host=getHost()+"/api/employees";
   console.log(this.host);
   this. getAllEmployees();  
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  toggle()
  {
    this.show=!this.show;
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
  receiveMessage($event)
  {
     this.getAllEmployees(); 
      this.show=false;
    
  }
  addNewEmployee()
  {
    this.show=true;
  }
}
