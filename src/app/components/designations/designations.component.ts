import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css'],
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
export class DesignationsComponent implements OnInit {

  constructor(public  http:HttpClient,public router:Router) { }
  host:string;
  designations:any;
  show=false;
  ngOnInit() {
    this.host=getHost()+"/api/designations";
    console.log(this.host);
    this. getAllDesignations();
  }

  getAllDesignations()
  {
    this.http.get(this.host).subscribe((response)=>{
       this.designations=response;
       console.log(this.designations);
    });
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  receiveMessage($event)
  {

      this.show=false;
      this.getAllDesignations();
  }
  addNew()
  {
    this.show=true;
  }
  seeDetailView(designation)
  {
    this.router.navigate(['/designations',designation.id]);
  }  

}
