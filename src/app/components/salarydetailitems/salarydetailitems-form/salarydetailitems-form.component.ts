import { Component, OnInit, Input,Output,EventEmitter
} from '@angular/core';
import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';

@Component({
  selector: 'app-salarydetailitems-form',
  templateUrl: './salarydetailitems-form.component.html',
  styleUrls: ['./salarydetailitems-form.component.css']
})
export class SalarydetailitemsFormComponent implements OnInit {

  @Input() salarydetailitem:any;  
  @Output() messageEvent=new EventEmitter<boolean>();
   newsalarydetailitemInfo={
    salary_detail:'',
    priority:'',
    pay_head:'',
    value:'',
    rate:'',
    unit:''
  }
  endpoint:string;
  salarydetails:any;
  payheads:any;
  units:any;

  constructor(private http:HttpClient) {
    this.endpoint=getHost();

   }
  
  ngOnInit() {
    let url = this.endpoint+"/api/salarydetails/"
    let payhead = this.endpoint+"/api/payheads/"
    let unit = this.endpoint+"/api/units/"
    this.http.get(url).subscribe((response)=>{
      this.salarydetails=response;
      console.log(response);
    })
    this.http.get(payhead).subscribe((response)=>{
      this.payheads=response;
      console.log(response);
    })
    this.http.get(unit).subscribe((response)=>{
      this.units=response;
      console.log(response);
    })
  }

  submit()
  {
    
    if(isUndefined(this.salarydetailitem))
    {
      //create a post request
      let postRequestUrl=this.endpoint+"/api/salarydetailitems/create/";
      console.log(this.newsalarydetailitemInfo);

      this.http.post(postRequestUrl,this.newsalarydetailitemInfo).subscribe((response)=>{
        console.log(response);  
        this.sendMessageToParent(true);  
      });
    }
    else
    {
       let puttRequestUrl=this.endpoint+"/api/salarydetailitems/"+this.salarydetailitem.id+"/edit/";
       console.log(this.salarydetailitem);
       this.http.put(puttRequestUrl,this.salarydetailitem).subscribe((response)=>{
         console.log(response);
       });

    }
  }

  sendMessageToParent(message:boolean)
  {
    this.messageEvent.emit(message);
  }
  cancel()
  {
    this.sendMessageToParent(true); 
  }

}
