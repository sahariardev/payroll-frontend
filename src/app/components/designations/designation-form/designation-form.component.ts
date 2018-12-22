import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';


@Component({
  selector: 'app-designation-form',
  templateUrl: './designation-form.component.html',
  styleUrls: ['./designation-form.component.css']
})
export class DesignationFormComponent implements OnInit {

   @Input() designation:any;
   endpoint=getHost();
   @Output() messageEvent=new EventEmitter<boolean>();
   newDesignationInfo={
     "name":'',
     "description":''
   }

  constructor(public http:HttpClient) { }


  ngOnInit() {
    
  }

 submit()
  {
    
    if(isUndefined(this.designation))
    {
      let data=new FormData();
      data.append("name",this.newDesignationInfo.name);
      data.append("description",this.newDesignationInfo.description);
      let url=this.endpoint+"/api/designations/create/"
      this.http.post(url,data).subscribe((response)=>{
         console.log(response); 
         this.sendMessageToParent(true);
      })
    }
    else
    {
      //create a put request
      let formData=new FormData();
      formData.append("id",this.designation.id);
      formData.append("name",this.designation.name);
      formData.append("description",this.designation.description); 
      console.log(this.designation);
      let endpointUrlForUpdatingdesignation=this.endpoint+"/api/designations/"+this.designation.id+"/edit/";
      this.http.put(endpointUrlForUpdatingdesignation,formData).subscribe((response)=>{
          this.sendMessageToParent(true);
      });

    }
  }

  sendMessageToParent(message:boolean)
  {
    this.messageEvent.emit(message);
  }

}
