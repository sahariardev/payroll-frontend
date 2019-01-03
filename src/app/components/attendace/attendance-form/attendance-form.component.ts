import { Component, OnInit, Input,Output,EventEmitter
} from '@angular/core';
import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrls: ['./attendance-form.component.css']
})
export class AttendanceFormComponent implements OnInit {

  @Input() attendance:any;  
  @Output() messageEvent=new EventEmitter<boolean>();
   newattendanceInfo={
    employee:'',
    production_attendance_type:'',
    value:'',
    unit:'',
    date:''    
  }
  endpoint:string;
  employees: any;
  units:any;
  productionattendancetypes: any;

  constructor(private http:HttpClient) {
    this.endpoint=getHost();
   }
  
  ngOnInit() {
    let url=this.endpoint+"/api/employees/"
    let unit = this.endpoint+"/api/units/"
    let productionattendancetype = this.endpoint+"/api/productionattendancetypes/"
    this.http.get(url).subscribe((response)=>{
      this.employees = response;
    })
    this.http.get(unit).subscribe((response)=>{
      this.units = response;
    })
    this.http.get(productionattendancetype).subscribe((response)=>{
      this.productionattendancetypes = response;
    })
  }

  submit()
  {
    
    if(isUndefined(this.attendance))
    {
      //create a post request
      let postRequestUrl=this.endpoint+"/api/attendances/create/";
      console.log(this.newattendanceInfo);

      this.http.post(postRequestUrl,this.newattendanceInfo).subscribe((response)=>{
        console.log(response);  
        this.sendMessageToParent(true);  
      });
    }
    else
    {
      //put request for editing
      console.log("---staring---");
       let puttRequestUrl=this.endpoint+"/api/attendances/"+this.attendance.id+"/edit/";
       console.log(this.attendance);
       console.log("---Ending---");
       let data={
         id:this.attendance.id,
         production_attendance_type:this.attendance.production_attendance_type,
         value:this.attendance.value,
         unit:this.attendance.unit,
         date:this.attendance.date
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
