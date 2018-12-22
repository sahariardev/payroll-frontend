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

  @Input() productionAttendaceType:any;
   endpoint=getHost();
   @Output() messageEvent=new EventEmitter<boolean>();
   newProductionAttendaceTypeInfo={
     "name":'',
     "type":''   
   }

  constructor(public http:HttpClient) { }


  ngOnInit() {
    
  }

 submit()
  {
    
    if(isUndefined(this.productionAttendaceType))
    {
      let data=new FormData();
      data.append("name",this.newProductionAttendaceTypeInfo.name);
      data.append("type",this.newProductionAttendaceTypeInfo.type);
      let url=this.endpoint+"/api/productionAttendaceTypes/create/"
      this.http.post(url,data).subscribe((response)=>{
         console.log(response); 
         this.sendMessageToParent(true);
      })
    }
    else
    {
      //create a put request  
      let formData=new FormData();
      formData.append("id",this.productionAttendaceType.id);
      formData.append("name",this.productionAttendaceType.name);
      formData.append("type",this.productionAttendaceType.symbol);
      console.log(this.productionAttendaceType);
      let endpointUrlForUpdatingproductionAttendaceType=this.endpoint+"/api/productionAttendaceTypes/"+this.productionAttendaceType.id+"/edit/";
      this.http.put(endpointUrlForUpdatingproductionAttendaceType,formData).subscribe((response)=>{
          this.sendMessageToParent(true);
      });

    }
  }

  sendMessageToParent(message:boolean)
  {
    this.messageEvent.emit(message);
  }

}
