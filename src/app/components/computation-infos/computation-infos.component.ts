import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-computation-infos',
  templateUrl: './computation-infos.component.html',
  styleUrls: ['./computation-infos.component.css'],
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
export class ComputationInfosComponent implements OnInit {

constructor(public  http:HttpClient,public router:Router) { }
  host:string;
  computationInfos:any;
  show=false;
  ngOnInit() {
    this.host=getHost()+"/api/computationinfos";
    console.log(this.host);
    this. getAllcomputationInfos();
  }

  getAllcomputationInfos()
  {
    this.http.get(this.host).subscribe((response)=>{
       this.computationInfos=response;
    });
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  receiveMessage($event)
  {
      this.show=false;
      this.getAllcomputationInfos();
  }
  addNew()
  {
    this.show=true;
  }
  seeDetailView(computationInfo)
  {
    this.router.navigate(['/computationInfos',computationInfo.id]);
  } 

}
