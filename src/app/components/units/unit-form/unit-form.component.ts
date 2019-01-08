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

  constructor(private http:HttpClient) { }

  ngOnInit() {  }

  submit()
  {
    if(isUndefined(this.unit))
    {
      let url=this.endpoint+"/api/units/create/"
      this.http.post(url,this.newUnitInfo).subscribe((response)=>{
         console.log(response); 
         this.sendMessageToParent(true);
      })
    }
    else
    {
      //create a put request 
      console.log(this.unit);
      let endpointUrlForUpdatingUnit=this.endpoint+"/api/units/"+this.unit.id+"/edit/";
      this.http.put(endpointUrlForUpdatingUnit,this.unit).subscribe((response)=>{
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
