import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-employees-detail-view',
  templateUrl: './employees-detail-view.component.html',
  styleUrls: ['./employees-detail-view.component.css'],
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
export class EmployeesDetailViewComponent implements OnInit {

  constructor(
            private route:ActivatedRoute,
            private http:HttpClient     
  ) { }
  id:number;
  endpoint=getHost()+"/api/employees";
  employee:any; 
  show=false;

  ngOnInit() {
    this.id= parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    let url=this.endpoint+"/"+this.id;
    this.http.get(url).subscribe((response)=>{
      this.employee=response; 
      console.log(this.employee);
    });
  
  }
  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  receiveMessage($event)
  {
      this.show=false; 
  }
  edit()
  {
     this.show=true;  
  }

}
