import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {isUndefined} from '../../helper';
import {HttpClient} from '@angular/common/http';
import {getHost} from '../../config';

@Component({
  selector: 'app-payhead-form',
  templateUrl: './payhead-form.component.html',
  styleUrls: ['./payhead-form.component.css']
})
export class PayheadFormComponent implements OnInit {

  @Input() payhead:any;
   endpoint=getHost();
   @Output() messageEvent=new EventEmitter<boolean>();
   newpayheadInfo={
     "name":'',
     "description":'',
     "add_net_salary":'',
     "calculation_type":'',
     "calculation_period":'',
     "pay_head_type":'',
     "attendence_production_type":'',
     "add_or_deduct":'',
     "under":''
   }
   units:any;
   payheadtype:any;
   attendanceprodutiontype:any;
   calculationType:any;
   addOrDeductsOption:any;
   expenseOption:any;

  constructor(public http:HttpClient) { }

  ngOnInit() {
     this.loadFormData();     
  }
  
  loadFormData()
  {
     let unitsUrl=this.endpoint+"/api/units/";
     let payheadtypeUrl=this.endpoint+"/api/payheadtypes/";
     let attendanceProductionTypeUrl=this.endpoint+"/api/productionattendancetypes";

     this.http.get(unitsUrl).subscribe((response)=>{
        this.units=response;
     }); 
     this.http.get(payheadtypeUrl).subscribe((response)=>{
       this.payheadtype=response;
     });
     this.http.get(attendanceProductionTypeUrl).subscribe((response) => {
       this.attendanceprodutiontype=response;   
     });
     this.calculationType=[
       {
         name:'Flat Rate',
         value:'Flat Rate'
       },
       {
         name:'On Attendence',
         value:'On Attendence'
       },
       {
         name:'On Production',
         value:'On Production'
       },
       {
         name:'As Computed Value',
         value:'As Computed Value'
       },
       {
         name:'As Custom Value',
         value:'As Custom Value'
       },
     ]
     this.addOrDeductsOption=[
       {
         name:'add',value:'add'
       },
       {
         name:'deduct',value:'deduct'
       }
     ];
     this.expenseOption=[
       {
         name:'Direct Expense',
         value:'Direct Expense'
       },
       {
         name:'Indirect Expense',
         value:'Indirect Expense'
       }

     ]
  }

 submit()
  {
    if(isUndefined(this.payhead))
    {
      let url=this.endpoint+"/api/payheads/create/"
      console.log(this.newpayheadInfo); 
      this.http.post(url,this.newpayheadInfo).subscribe((response)=>{ 
         this.sendMessageToParent(true);
      })
    }
    else
    {
      let endpointUrlForUpdatingpayhead=this.endpoint+"/api/payheads/"+this.payhead.id+"/edit/";
      this.http.put(endpointUrlForUpdatingpayhead,this.payhead).subscribe((response)=>{
          this.sendMessageToParent(true);
      });
    }
  }

  sendMessageToParent(message:boolean)  {
    this.messageEvent.emit(message);
  }

}
