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
  
   @Input() package_item:any;
   endpoint=getHost();
   @Output() messageEvent=new EventEmitter<boolean>();
   newPackageInfo={
     "name":'',
     "salary":'',
     "annual_leave":'',
     "sick_leave":'',
     "extra":'',
     "description":''
   }
   constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  submit()
  {
    if(isUndefined(this.package_item))
    {
      let url=this.endpoint+"/api/packages/create/"
      this.http.post(url,this.newPackageInfo).subscribe((response)=>{
         this.sendMessageToParent(true);
      })
    }
    else
    {
      //create a put request
     let endpointUrlForUpdatingPackage=this.endpoint+"/api/packages/"+this.package_item.id+"/edit/";
      this.http.put(endpointUrlForUpdatingPackage,this.package_item).subscribe((response)=>{
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
