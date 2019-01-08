import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';


@Component({
  selector: 'app-production-attendance-type-form',
  templateUrl: './production-attendance-type-form.component.html',
  styleUrls: ['./production-attendance-type-form.component.css']
})
export class ProductionAttendanceTypeFormComponent implements OnInit {

  @Input() productionAttendanceTypes:any;
   endpoint=getHost();
   @Output() messageEvent=new EventEmitter<boolean>();
   newProductionAttendanceTypeInfo={
     "name":'',
     "type":''   
   }
   produtionattendacetypeoptions=[
     {
       name:'Production',
       value:'Production'
     },
     {
       name:'Attendance or leave with pay',
       value:'attendance/leave with pay'
     },
     {
       name:'Attendance or leave without pay',
       value:'attendance/leave without pay'
     }

   ];

  constructor(public http:HttpClient) { }

  ngOnInit() {}

 submit()
  {
    if(isUndefined(this.productionAttendanceTypes))
    {
      let url=this.endpoint+"/api/productionattendancetypes/create/"
      this.http.post(url,this.newProductionAttendanceTypeInfo).subscribe((response)=>{
         console.log(response); 
         this.sendMessageToParent(true);
      })
    }
    else
    {
      //create a put request  
      console.log(this.productionAttendanceTypes);
      let endpointUrlForUpdatingproductionAttendaceType=this.endpoint+"/api/productionattendancetypes/"+this.productionAttendanceTypes.id+"/edit/";
      this.http.put(endpointUrlForUpdatingproductionAttendaceType,this.productionAttendanceTypes).subscribe((response)=>{
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
