import { Component, OnInit, Input,Output,EventEmitter
 } from '@angular/core';
 import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {


  @Input() employee:any;  
  @Output() messageEvent=new EventEmitter<boolean>();
   newEmployeeInfo={
    name:'',
    address:'',
    email:'',
    contact:'',
    blood_group:'',
    gender:'',
    date_of_birth:'',
    date_of_joining:'',
    marital_status:'',
    spouse_name:'',
    peckage:'',
    designation:''
  }
  endpoint:string;
  urlForPackages:string;
  urlForDesignations:string;
  packages:any;
  designations:any;
  
  genderChoices=[{
    name:'Male',value:'M'
  },{
    name:'Female',value:'F'
  }]
  maritalStatusChoices=[{
    name:'Single',value:'Single'
  },{
    name:'Married',value:'Married'
  }]
  
  constructor(private http:HttpClient) {
    this.endpoint=getHost();

   }
  
  ngOnInit() {
    this.urlForPackages=this.endpoint+"/api/packages/";
    this.urlForDesignations=this.endpoint+"/api/designations/";
    this.http.get(this.urlForPackages).subscribe((response=>{
      this.packages=response; 
    }));
    this.http.get(this.urlForDesignations).subscribe((response)=>{
      this.designations=response;
      console.log(response);
    })

  }

  submit()
  {
    
    if(isUndefined(this.employee))
    {
      //create a post request
      let postRequestUrl=this.endpoint+"/api/employees/create/";
      console.log(this.newEmployeeInfo);
      this.http.post(postRequestUrl,this.newEmployeeInfo).subscribe((response)=>{
        console.log(response);  
        this.sendMessageToParent(true);  
      });
    }
    else
    {
       let puttRequestUrl=this.endpoint+"/api/employees/"+this.employee.id+"/edit/";
       console.log(this.employee);
       this.http.put(puttRequestUrl,this.employee).subscribe((response)=>{
         console.log(response);
       });

    }
  }

  sendMessageToParent(message:boolean)
  {
    this.messageEvent.emit(message);
  }

}
