import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-attendace',
  templateUrl: './attendace.component.html',
  styleUrls: ['./attendace.component.css'],
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
export class AttendaceComponent implements OnInit {

  constructor(public  http:HttpClient,public router:Router) { }
  host:string;
  Attendances:any;
  show=false;
  ngOnInit() {
    this.host=getHost()+"/api/Attendances";
    console.log(this.host);
    this. getAllAttendances();
  }

  getAllAttendances()
  {
    this.http.get(this.host).subscribe((response)=>{
       this.Attendances=response;
       console.log(this.Attendances);
    });
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  receiveMessage($event)
  {

      this.show=false;
      this.getAllAttendances();
  }
  addNew()
  {
    this.show=true;
  }
  seeDetailView(attendance)
  {
    this.router.navigate(['/Attendances',attendance.id]);
  }  

}
