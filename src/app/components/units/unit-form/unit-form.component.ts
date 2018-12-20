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
   host:any;
   @Output() messageEvent=new EventEmitter<boolean>();
   newUnitInfo={
     "name":'',
     "symbol":'',
     "description":''
   }

  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.host=getHost();
  }

 submit()
  {
    this.sendMessageToParent(true);
    if(isUndefined(this.unit))
    {
      let data=new FormData();
      data.append("name",this.newUnitInfo.name);
      data.append("symbol",this.newUnitInfo.symbol);
      data.append("description",this.newUnitInfo.description);
      console.log(this.newUnitInfo);
      let url=this.host+"/api/units/create/"
      let l=JSON.stringify(this.newUnitInfo); 
      this.http.post(url,data).subscribe((response)=>{
         console.log(response); 
      })
    }
    else
    {
      //create a put request
    }
  }

  sendMessageToParent(message:boolean)
  {
    this.messageEvent.emit(message);
  }

}
