import { Component, OnInit, Input,Output,EventEmitter
 } from '@angular/core';
 import {isUndefined} from '../../helper';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {


  @Input() employee:any;  
  @Output() messageEvent=new EventEmitter<boolean>();
   newEmployeeInfo={
    name:''
  }
  
  constructor() { }
  
  ngOnInit() {
  }

  submit()
  {
    this.sendMessageToParent(true);
    if(isUndefined(this.employee))
    {
      //create a post request
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
