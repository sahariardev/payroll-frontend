import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../config';
import {Router} from '@angular/router';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-salarydetail',
  templateUrl: './salarydetail.component.html',
  styleUrls: ['./salarydetail.component.css'],
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
export class SalarydetailComponent implements OnInit {

  show=false;
  constructor(public  http:HttpClient,public router:Router) {

   }
   host:string;
   salarydetails:any;
  ngOnInit() {
   this.host=getHost()+"/api/salarydetails";
   console.log(this.host);
   this. getAllsalarydetails();  
  }

  get stateName(){
    return this.show ? 'show' : 'hide'  
  }
  toggle()
  {
    this.show=!this.show;
  }

  getAllsalarydetails()
  {
    this.http.get(this.host).subscribe((response)=>{
       console.log("rep")
       console.log(response);
       this.salarydetails=response;
       console.log(this.salarydetails);
    });
  }
  seeDetailView(salarydetail)
  {
    console.log("one salarydetail is");
    console.log(salarydetail);
    this.router.navigate(['/salarydetails',salarydetail.id]);
  }
  receiveMessage($event)
  {
     this.getAllsalarydetails(); 
      this.show=false;
    
  }
  addNewsalarydetail()
  {
    this.show=true;
  }
}
