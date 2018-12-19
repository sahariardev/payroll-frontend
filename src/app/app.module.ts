import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {EmployeesComponent} from './components/employees/Employees.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeesDetailViewComponent } from './components/employees-detail-view/employees-detail-view.component'

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


];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeesComponent,
    DashboardComponent,
    EmployeesDetailViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
