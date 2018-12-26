import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-payhead',
  templateUrl: './payhead.component.html',
  styleUrls: ['./payhead.component.css'],
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
export class PayheadComponent implements OnInit {

  constructor(public  http:HttpClient,public router:Router) { }
  host:string;
  payheads:any;
  show=false;
  ngOnInit() {
    this.host=getHost()+"/api/payheads";
    this. getAllpayheads();
  }

  getAllpayheads()
  {
    this.http.get(this.host).subscribe((response)=>{
       this.payheads=response;
    });
  }
  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  receiveMessage($event)
  {
      this.show=false;
      this.getAllpayheads();
  }
  addNew()
  {
    this.show=true;
  }
  seeDetailView(payhead)
  {
    this.router.navigate(['/payheads',payhead.id]);
  } 

}
