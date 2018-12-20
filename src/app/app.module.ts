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
import { EmployeeFormComponent } from './components/employees/employee-form/employee-form.component'


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

];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeesComponent,
    DashboardComponent,
    EmployeesDetailViewComponent,
    EmployeeFormComponent,
    UnitsComponent

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
