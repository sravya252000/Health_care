import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { InfodeleteComponent } from './infodelete/infodelete.component';
import { InfoupdateComponent } from './infoupdate/infoupdate.component';
import { FilterPipe } from './filter.pipe';
import { DoctorchildModule } from './doctorchild/doctorchild.module';
import { DoctorchildComponent } from './doctorchild/doctorchild.component';
import { DoctorchildRoutingModule } from './doctorchild/doctorchild-routing.module';

const routes: Routes = [
{
    path:'',
    component:HeaderComponent,
    canActivateChild:[ServiceService],
    children:[{path:'register',component:RegisterComponent}]
},
{
  path:'register',
  component:RegisterComponent
},
{
  path:'doctor',
  component:DoctorComponent
},
{
  path:'admin',
  component:AdminComponent
},
{
  path:'patient',
  component:PatientComponent,
},
{
  path:'doctorchild',
  loadChildren: () => import('./doctorchild/doctorchild.module').then((m) => m.DoctorchildModule) 
}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    PatientComponent,
    InfodeleteComponent,
    InfoupdateComponent,
    AdminComponent,
    FilterPipe,
    DoctorchildComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,CommonModule,
    DoctorchildModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    HttpClient,
    HttpClientModule,
    ServiceService,
    provideClientHydration(),
    DoctorchildModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }