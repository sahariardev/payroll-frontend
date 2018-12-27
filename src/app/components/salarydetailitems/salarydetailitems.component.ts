import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-salarydetailitems',
  templateUrl: './salarydetailitems.component.html',
  styleUrls: ['./salarydetailitems.component.css'],
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
export class SalarydetailitemsComponent implements OnInit {

  show=false;
  constructor(public  http:HttpClient,public router:Router) {

   }
   host:string;
   salarydetailitems:any;
  ngOnInit() {
   this.host=getHost()+"/api/salarydetailitems";
   console.log(this.host);
   this. getAllsalarydetailitems();  
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  toggle()
  {
    this.show=!this.show;
  }

  getAllsalarydetailitems()
  {
    this.http.get(this.host).subscribe((response)=>{
       console.log("rep")
       console.log(response);
       this.salarydetailitems=response;
       console.log(this.salarydetailitems);
    });
  }
  seeDetailView(salarydetailitem)
  {
    console.log("one salarydetailitem is");
    console.log(salarydetailitem);
    this.router.navigate(['/salarydetailitems',salarydetailitem.id]);
  }
  receiveMessage($event)
  {
     this.getAllsalarydetailitems(); 
      this.show=false;
    
  }
  addNewsalarydetailitem()
  {
    this.show=true;
  }
}
