import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {

  constructor(public  http:HttpClient,public router:Router) { }
  host:string;
  units:any;
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



}
