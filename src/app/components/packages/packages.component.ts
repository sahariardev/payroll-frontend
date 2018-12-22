import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css'],
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
export class PackagesComponent implements OnInit {

  constructor(public  http:HttpClient,public router:Router) { }
  host:string;
  packages:any;
  show=false;

  ngOnInit() {
    this.host=getHost()+"/api/packages";
    this.getAllPackages();
  }

  getAllPackages()
  {
    this.http.get(this.host).subscribe((response)=>{
       this.packages=response;
    });
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }

  receiveMessage($event)
  {
      this.show=false;
      this.getAllPackages();
  }

  addNew()
  {
    this.show=true;
  }
  //can not use package as it is a reserved keyword
  seeDetailView(package_item)
  {
    this.router.navigate(['/packages',package_item.id]);
  }  
}
