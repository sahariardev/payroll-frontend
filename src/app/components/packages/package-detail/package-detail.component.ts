import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css'],
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
export class PackageDetailComponent implements OnInit {
   
  id:number;
  endpoint:string;
  package:any;
  show:boolean;

 constructor(
                private route:ActivatedRoute,
                private http:HttpClient      
  ) {
    this.show=false;
   }
  

  ngOnInit() {
    this.endpoint=getHost()+"/api/packages/";
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.loadData(); 
  }
  loadData()
  {
     //fethcing the data using the id
    let url=this.endpoint+""+this.id;
    console.log("url is "+url);
    this.http.get(url).subscribe((response)=>{
      this.package=response;
    });
  }
  //receving message from child component
  receiveMessage($event)
  {
      this.show=false;      
  }
  edit()
  {
     this.show=true;
  }
  //animation related methods
   get stateName(){
    return this.show ? 'show' : 'hide'  
  }

}
