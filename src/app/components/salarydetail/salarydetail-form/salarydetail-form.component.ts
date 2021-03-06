import { Component, OnInit, Input,Output,EventEmitter
} from '@angular/core';
import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';

@Component({
  selector: 'app-salarydetail-form',
  templateUrl: './salarydetail-form.component.html',
  styleUrls: ['./salarydetail-form.component.css']
})
export class SalarydetailFormComponent implements OnInit {

  @Input() salarydetail:any;  
  @Output() messageEvent=new EventEmitter<boolean>();
   newsalarydetailInfo={

    effective_from:'',
    effective_till_date:'',
    name:'',
    employee:''
    
  }
  endpoint:string;
  employees: any;

  constructor(private http:HttpClient) {
    this.endpoint=getHost();
   }
  
  ngOnInit() {
    let url=this.endpoint+"/api/employees/"
    this.http.get(url).subscribe((response=>{
      this.employees = response;
    }))
  }

  submit()
  {
    
    if(isUndefined(this.salarydetail))
    {
      //create a post request
      let postRequestUrl=this.endpoint+"/api/salarydetails/create/";
      console.log(this.newsalarydetailInfo);

      this.http.post(postRequestUrl,this.newsalarydetailInfo).subscribe((response)=>{
        console.log(response);  
        this.sendMessageToParent(true);  
      });
    }
    else
    {
      //put request for editing
      console.log("---staring---");
       let puttRequestUrl=this.endpoint+"/api/salarydetails/"+this.salarydetail.id+"/edit/";
       console.log(this.salarydetail);
       console.log("---Ending---");
       let data={

         id:this.salarydetail.id,
         effective_till_date:this.salarydetail.effective_till_date,
         effective_from:this.salarydetail.effective_from,
       }

       this.http.put(puttRequestUrl,data).subscribe((response)=>{
            this.sendMessageToParent(true);

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
