import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';

@Component({
  selector: 'app-payhead-type-form',
  templateUrl: './payhead-type-form.component.html',
  styleUrls: ['./payhead-type-form.component.css']
})
export class PayheadTypeFormComponent implements OnInit {

   @Input() payheadType:any;
   endpoint=getHost();
   @Output() messageEvent=new EventEmitter<boolean>();
   newpayheadTypeInfo={
     "name":'',
     "description":''
   }

  constructor(public http:HttpClient) { }


  ngOnInit() {
    
  }

 submit()
  {
    
    if(isUndefined(this.payheadType))
    {

      let url=this.endpoint+"/api/payheadtypes/create/"
      this.http.post(url,this.newpayheadTypeInfo).subscribe((response)=>{
         console.log(response); 
         this.sendMessageToParent(true);
      })
    }
    else
    {
 
     
      let endpointUrlForUpdatingpayheadType=this.endpoint+"/api/payheadtypes/"+this.payheadType.id+"/edit/";
      this.http.put(endpointUrlForUpdatingpayheadType,this.payheadType).subscribe((response)=>{
          this.sendMessageToParent(true);
      });

    }
  }
  sendMessageToParent(message:boolean)
  {
    this.messageEvent.emit(message);
  }

}
