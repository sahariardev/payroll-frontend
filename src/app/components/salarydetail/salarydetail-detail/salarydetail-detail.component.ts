import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-salarydetail-detail',
  templateUrl: './salarydetail-detail.component.html',
  styleUrls: ['./salarydetail-detail.component.css'],
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
export class SalarydetailDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private http:HttpClient     
  ) { }
  id:number;
  endpoint=getHost()+"/api/salarydetails";
  salarydetail:any; 
  show=false;

  ngOnInit() {
  this.id= parseInt(this.route.snapshot.paramMap.get('id'));
  let url=this.endpoint+"/"+this.id;
  this.http.get(url).subscribe((response)=>{
  this.salarydetail=response; 
  console.log(this.salarydetail);
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
