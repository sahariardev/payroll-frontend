import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {EmployeesComponent} from './components/employees/Employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes:Routes=[
 {
   path:'employees', component:EmployeesComponent
  },
 {
    path:'',component:DashboardComponent
 },


];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
