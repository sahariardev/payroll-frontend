import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';

@Component({
  selector: 'app-employees-detail-view',
  templateUrl: './employees-detail-view.component.html',
  styleUrls: ['./employees-detail-view.component.css']
})
export class EmployeesDetailViewComponent implements OnInit {

  constructor(
            private route:ActivatedRoute,
            private http:HttpClient     
  ) { }
  id:number;
  endpoint=getHost()+"/api/employees";
  employee:any; 

  ngOnInit() {
    this.id= parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    let url=this.endpoint+"/"+this.id;
    this.http.get(url).subscribe((response)=>{
      this.employee=response; 
      console.log(this.employee);
    });
  
  }

}
