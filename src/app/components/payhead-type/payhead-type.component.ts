import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';
@Component({
  selector: 'app-payhead-type',
  templateUrl: './payhead-type.component.html',
  styleUrls: ['./payhead-type.component.css'],
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
export class PayheadTypeComponent implements OnInit {

  constructor(public  http:HttpClient,public router:Router) { }
  host:string;
  payheadTypes:any;
  show=false;
  ngOnInit() {
    this.host=getHost()+"/api/payheadtypes";
    console.log(this.host);
    this. getAllpayheadTypes();
  }

  getAllpayheadTypes()
  {
    this.http.get(this.host).subscribe((response)=>{
      this.payheadTypes=response;
    });
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  receiveMessage($event)
  {

      this.getAllpayheadTypes();
      this.show=false;
  }
  addNew()
  {
    this.show=true;
  }
  seeDetailView(payheadTypes)
  {
    console.log("I am here ")
    this.router.navigate(['/payheadtypes',payheadTypes.id]);
  }

}
