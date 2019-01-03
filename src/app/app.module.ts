import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {EmployeesComponent} from './components/employees/Employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeesDetailViewComponent } from './components/employees-detail-view/employees-detail-view.component';
import { UnitsComponent } from './components/units/units.component'
import { EmployeeFormComponent } from './components/employees/employee-form/employee-form.component';
import { UnitFormComponent } from './components/units/unit-form/unit-form.component';
import { UnitDetailComponent } from './components/units/unit-detail/unit-detail.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PackageDetailComponent } from './components/packages/package-detail/package-detail.component';
import { PackageFormComponent } from './components/packages/package-form/package-form.component';
import { DesignationsComponent } from './components/designations/designations.component';
import { DesignationFormComponent } from './components/designations/designation-form/designation-form.component';
import { DesignationDetailComponent } from './components/designations/designation-detail/designation-detail.component';
import { ProductionAttendaceTypeComponent } from './components/production-attendace-type/production-attendace-type.component';
import { ProductionAttendanceTypeDetailComponent } from './components/production-attendace-type/production-attendance-type-detail/production-attendance-type-detail.component';
import { ProductionAttendanceTypeFormComponent } from './components/production-attendace-type/production-attendance-type-form/production-attendance-type-form.component';
import { PayheadTypeComponent } from './components/payhead-type/payhead-type.component';
import { PayheadTypeFormComponent } from './components/payhead-type/payhead-type-form/payhead-type-form.component';
import { PayheadTypeDetailComponent } from './components/payhead-type/payhead-type-detail/payhead-type-detail.component';
import { PayheadComponent } from './components/payhead/payhead.component';
import { PayheadFormComponent } from './components/payhead/payhead-form/payhead-form.component';
import { PayheadDetailComponent } from './components/payhead/payhead-detail/payhead-detail.component';
import { SalarydetailComponent } from './components/salarydetail/salarydetail.component';
import { SalarydetailFormComponent } from './components/salarydetail/salarydetail-form/salarydetail-form.component';
import { SalarydetailDetailComponent } from './components/salarydetail/salarydetail-detail/salarydetail-detail.component';
import { SalarydetailitemsComponent } from './components/salarydetailitems/salarydetailitems.component';
import { SalarydetailitemsFormComponent } from './components/salarydetailitems/salarydetailitems-form/salarydetailitems-form.component';
import { SalarydetailitemsDetailComponent } from './components/salarydetailitems/salarydetailitems-detail/salarydetailitems-detail.component';
import { ComputationInfosComponent } from './components/computation-infos/computation-infos.component';
import { ComputationInfoFormComponent } from './components/computation-infos/computation-info-form/computation-info-form.component';
import { ComputationInfoDetailComponent } from './components/computation-infos/computation-info-detail/computation-info-detail.component';
import { AttendaceComponent } from './components/attendace/attendace.component';
import { AttendanceFormComponent } from './components/attendace/attendance-form/attendance-form.component';
import { AttendanceDetailComponent } from './components/attendace/attendance-detail/attendance-detail.component'


const appRoutes:Routes=[
 {
   path:'employees', component:EmployeesComponent
  },
  {
   path:'employees/:id', component:EmployeesDetailViewComponent
  },
 {
    path:'',component:DashboardComponent
 },
 {
   path:'units', component:UnitsComponent
 },
 {
   path:'units/:id', component:UnitDetailComponent
  },
  {
   path:'packages', component:PackagesComponent
 },
 {
   path:'packages/:id', component:PackageDetailComponent
  },
  {
   path:'designations', component:DesignationsComponent
 },
 {
   path:'designations/:id', component:DesignationDetailComponent
  },
  {
   path:'productionattendancetypes', component:ProductionAttendaceTypeComponent
 },
 {
   path:'productionattendancetypes/:id', component:ProductionAttendanceTypeDetailComponent
  },
  {
   path:'payheadtypes', component:PayheadTypeComponent
  },
  {
   path:'payheadtypes/:id', component:PayheadTypeDetailComponent
  },
  {
   path:'payheads', component:PayheadComponent
  },
  {
   path:'payheads/:id', component:PayheadDetailComponent
  },
  {
    path:'salarydetails', component:SalarydetailComponent
  },
  {
    path:'salarydetails/:id', component: SalarydetailDetailComponent
  },
  {
    path:'salarydetailitems', component: SalarydetailitemsComponent
  },
  {
    path:'salarydetailitems/:id', component: SalarydetailitemsDetailComponent
  },
  {
    path:'attendances', component: AttendaceComponent
  },
  {
    path:'attendances/:id', component: AttendanceDetailComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeesComponent,
    DashboardComponent,
    EmployeesDetailViewComponent,
    EmployeeFormComponent,
    UnitsComponent,
    UnitFormComponent,
    UnitDetailComponent,
    PackagesComponent,
    PackageDetailComponent,
    PackageFormComponent,
    DesignationsComponent,
    DesignationFormComponent,
    DesignationDetailComponent,
    ProductionAttendaceTypeComponent,
    ProductionAttendanceTypeDetailComponent,
    ProductionAttendanceTypeFormComponent,
    PayheadTypeComponent,
    PayheadTypeFormComponent,
    PayheadTypeDetailComponent,
    PayheadComponent,
    PayheadFormComponent,
    PayheadDetailComponent,
    SalarydetailComponent,
    SalarydetailFormComponent,
    SalarydetailDetailComponent,
    SalarydetailitemsComponent,
    SalarydetailitemsFormComponent,
    SalarydetailitemsDetailComponent,
    ComputationInfosComponent,
    ComputationInfoFormComponent,
    ComputationInfoDetailComponent,
    AttendaceComponent,
    AttendanceFormComponent,
    AttendanceDetailComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
