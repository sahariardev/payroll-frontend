import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-production-attendance-type-detail',
  templateUrl: './production-attendance-type-detail.component.html',
  styleUrls: ['./production-attendance-type-detail.component.css'],
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
export class ProductionAttendanceTypeDetailComponent implements OnInit {

  id:number;
  endpoint:string;
  productionAttendanceTypes:any;
  show:boolean;
  
  constructor(
                private route:ActivatedRoute,
                private http:HttpClient      
  ) {
    this.show=false;
   }
  
  ngOnInit() {
    this.endpoint=getHost()+"/api/productionattendancetypes/";
    //catching the id from the url
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.loadData(); 
    
  }
  loadData()
  {
     //fethcing the data using the id
    let url=this.endpoint+""+this.id;
    this.http.get(url).subscribe((response)=>{
      this.productionAttendanceTypes=response;
      //debuggin the log 
      console.log(this.productionAttendanceTypes);
    });
  }
  //receving message from child component
  receiveMessage($event)
  {
      this.show=false;  
  }
  //while click on edit button show the form
  edit()
  {
     this.show=true;
  }
  
  //animation related methods amd properties
   get stateName(){
    return this.show ? 'show' : 'hide'  
  }

}
