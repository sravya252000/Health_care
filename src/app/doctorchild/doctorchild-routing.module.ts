import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorchildComponent } from './doctorchild.component';

const routes: Routes = [
  {
    path:'doctorchild',
    component:DoctorchildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorchildRoutingModule { }
