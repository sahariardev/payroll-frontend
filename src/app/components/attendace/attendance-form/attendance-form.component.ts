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
  endpoint=getHost();  
  @Output() messageEvent=new EventEmitter<boolean>();
   newattendanceInfo={
    "employee":'',
    "production_attendance_type":'',
    "value":'',
    "unit":'',
    "date":''    
  }
  employees: any;
  units:any;
  productionattendancetypes: any;

  constructor(private http:HttpClient) {}
  
  ngOnInit() {
    this.loadFormData();
  }

  loadFormData(){
    let employeeUrl=this.endpoint+"/api/employees/"
    let unitUrl = this.endpoint+"/api/units/"
    let productionattendancetypeUrl = this.endpoint+"/api/productionattendancetypes/"
    this.http.get(employeeUrl).subscribe((response)=>{
      this.employees = response;
    })
    this.http.get(unitUrl).subscribe((response)=>{
      this.units = response;
    })
    this.http.get(productionattendancetypeUrl).subscribe((response)=>{
      this.productionattendancetypes = response;
    })
  }

  submit()
  {
    
    if(isUndefined(this.attendance))
    {
      let url = this.endpoint+"/api/attendances/create/"
      console.log(this.newattendanceInfo); 
      this.http.post(url,this.newattendanceInfo).subscribe((response)=>{
        this.sendMessageToParent(true);
     })
    }
    else
    {
      //put request for editing
      console.log("---staring---");
       let puttRequestUrl=this.endpoint+"/api/attendances/"+this.attendance.id+"/edit/";
       this.http.put(puttRequestUrl,this.attendance).subscribe((response)=>{
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
