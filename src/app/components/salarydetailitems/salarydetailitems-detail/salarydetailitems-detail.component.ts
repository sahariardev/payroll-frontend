import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-salarydetailitems-detail',
  templateUrl: './salarydetailitems-detail.component.html',
  styleUrls: ['./salarydetailitems-detail.component.css'],
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
export class SalarydetailitemsDetailComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private http:HttpClient     
) { }
id:number;
endpoint=getHost()+"/api/salarydetailitems";
salarydetailitem:any; 
show=false;

ngOnInit() {
this.id= parseInt(this.route.snapshot.paramMap.get('id'));
console.log(this.id);
let url=this.endpoint+"/"+this.id;
this.http.get(url).subscribe((response)=>{
this.salarydetailitem=response; 
console.log(this.salarydetailitem);
});

}
get stateName(){
return this.show ? 'show' : 'hide'  
}
receiveMessage($event)
{
this.show=false; 
}
edit()
{
this.show=true;  
}

}
