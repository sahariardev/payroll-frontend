import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';

@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.css'],
  
})
export class UnitFormComponent implements OnInit {
  
   @Input() unit:any;
   endpoint=getHost();
   @Output() messageEvent=new EventEmitter<boolean>();
   newUnitInfo={
     "name":'',
     "symbol":'',
     "description":''
   }

  constructor(public http:HttpClient) { }


  ngOnInit() {
    
  }

 submit()
  {
    
    if(isUndefined(this.unit))
    {
      let data=new FormData();
      data.append("name",this.newUnitInfo.name);
      data.append("symbol",this.newUnitInfo.symbol);
      data.append("description",this.newUnitInfo.description);
      let url=this.endpoint+"/api/units/create/"
      this.http.post(url,data).subscribe((response)=>{
         console.log(response); 
         this.sendMessageToParent(true);
      })
    }
    else
    {
      //create a put request
      let formData=new FormData();
      formData.append("id",this.unit.id);
      formData.append("name",this.unit.name);
      formData.append("symbol",this.unit.symbol);
      formData.append("description",this.unit.description); 
      console.log(this.unit);
      let endpointUrlForUpdatingUnit=this.endpoint+"/api/units/"+this.unit.id+"/edit/";
      this.http.put(endpointUrlForUpdatingUnit,formData).subscribe((response)=>{
          this.sendMessageToParent(true);
      });

    }
  }

  sendMessageToParent(message:boolean)
  {
    this.messageEvent.emit(message);
  }

}
