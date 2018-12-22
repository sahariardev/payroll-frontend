import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';
@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})
export class PackageFormComponent implements OnInit {
  
   @Input() package:any;
   endpoint:string;
   @Output() messageEvent=new EventEmitter<boolean>();
   newPackageInfo={
     "name":'',
     "salary":'',
     "annual_leave":'',
     "sick_leave":'',
     "extra":'',
     "description":''
   }
   constructor(public http:HttpClient) {
     this.endpoint=getHost();
    }

  ngOnInit() {
  }
  submit()
  {
    
    if(isUndefined(this.package))
    {
      let data=new FormData();
      data.append("name",this.newPackageInfo.name);
      data.append("salary",this.newPackageInfo.salary);
      data.append("annual_leave",this.newPackageInfo.annual_leave);
      data.append("sick_leave",this.newPackageInfo.sick_leave);
      data.append("extra",this.newPackageInfo.extra);
      data.append("description",this.newPackageInfo.description);
      let url=this.endpoint+"/api/packages/create/"
      this.http.post(url,data).subscribe((response)=>{
         this.sendMessageToParent(true);
      })
    }
    else
    {
      //create a put request
      let formData=new FormData();
      formData.append("name",this.package.name);
      formData.append("salary",this.package.salary);
      formData.append("annual_leave",this.package.annual_leave);
      formData.append("sick_leave",this.package.sick_leave);
      formData.append("extra",this.package.extra);
      formData.append("description",this.package.description);
     let endpointUrlForUpdatingPackage=this.endpoint+"/api/packages/"+this.package.id+"/edit/";
      this.http.put(endpointUrlForUpdatingPackage,formData).subscribe((response)=>{
          this.sendMessageToParent(true);
      });
    }
  }

  sendMessageToParent(message:boolean)
  {
    this.messageEvent.emit(message);
  }

}
