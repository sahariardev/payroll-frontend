import { Component, OnInit, Input,Output,EventEmitter
 } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {


  @Input() employee:any;  
  @Output() messageEvent=new EventEmitter<boolean>();
  constructor() { }
  ngOnInit() {
  }

  
  newEmployeeInfo={
    name:''
  }

  submit()
  {
    this.sendMessageToParent(true);
    if(this.isUndefined(this.employee))
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
  isUndefined(object)
  {
       if(object ===undefined)
       {
         return true;
       } 
       else
       {
         return false;
       }
  }
}
