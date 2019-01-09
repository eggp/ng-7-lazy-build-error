import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'test1/details'},
  {path:'test1',loadChildren:'./test1/test1.module#Test1Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
