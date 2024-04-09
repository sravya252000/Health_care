import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoupdateComponent } from './infoupdate.component';
import { FilterPipe } from '../filter.pipe';



@NgModule({
  declarations: [
    InfoupdateComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class InfoupdateModule { }
