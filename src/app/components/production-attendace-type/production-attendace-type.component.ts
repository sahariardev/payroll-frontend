import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-production-attendace-type',
  templateUrl: './production-attendace-type.component.html',
  styleUrls: ['./production-attendace-type.component.css'],
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
export class ProductionAttendaceTypeComponent implements OnInit {

 constructor(public  http:HttpClient,public router:Router) { }
  host:string;
  productionAttendanceTypes:any;
  show=false;
  ngOnInit() {
    this.host=getHost()+"/api/productionattendancetypes";
    console.log(this.host);
    this. getAllproductionAttendanceTypes();
  }

  getAllproductionAttendanceTypes()
  {
    this.http.get(this.host).subscribe((response)=>{
       console.log("rep")
       console.log(response);
       this.productionAttendanceTypes=response;
       console.log(this.productionAttendanceTypes);
    });
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  receiveMessage($event)
  {
      this.show=false;
      this.getAllproductionAttendanceTypes();
  }
  addNew()
  {
    this.show=true;
  }
  seeDetailView(productionAttendanceType)
  {
    console.log("here")
    this.router.navigate(['/productionattendancetypes',productionAttendanceType.id]);
  }  


}
