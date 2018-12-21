import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';


@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css'],
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
export class UnitsComponent implements OnInit {

  constructor(public  http:HttpClient,public router:Router) { }
  host:string;
  units:any;
  show=false;
  ngOnInit() {
    this.host=getHost()+"/api/units";
    console.log(this.host);
    this. getAllUnits();
  }

  getAllUnits()
  {
    this.http.get(this.host).subscribe((response)=>{
       console.log("rep")
       console.log(response);
       this.units=response;
       console.log(this.units);
    });
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  receiveMessage($event)
  {
      console.log("Message is "+$event); 
      this.show=false;
      this.getAllUnits();
  }
  addNew()
  {
    this.show=true;
  }
  seeDetailView(unit)
  {
    this.router.navigate(['/units',unit.id]);
  }  



}
