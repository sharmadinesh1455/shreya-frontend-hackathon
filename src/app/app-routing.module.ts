import { NgModule, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ManagerLoginComponent } from './manager-login/manager-login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'employeeLogin', component: EmployeeLoginComponent},
  {path:'managerLogin', component: ManagerLoginComponent},
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{


  ngOnInit(): void {
  }

 }
