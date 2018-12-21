import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css'],
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
export class UnitDetailComponent implements OnInit {

  constructor(
                private route:ActivatedRoute,
                private http:HttpClient      
  ) { }
  id:number;
  endpoint=getHost()+"/api/units/";
  unit:any;
  ngOnInit() {
    //catching the id from the url
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.loadData(); 
    
  }
  loadData()
  {
     //fethcing the data using the id
    let url=this.endpoint+""+this.id;
    this.http.get(url).subscribe((response)=>{
      this.unit=response;
      //debuggin the log 
      console.log(this.unit);
    });
  }
  //receving message from child component
  receiveMessage($event)
  {
      console.log("Message is "+$event); 
      this.show=false;
      
  }
  //while click on edit button show the form
  edit()
  {
     this.show=true;
  }
  
  //animation related methods amd properties

   show=false;
   
   get stateName(){
    return this.show ? 'show' : 'hide'  
  }

}
