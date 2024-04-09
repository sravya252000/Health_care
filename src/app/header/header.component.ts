import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Init } from 'v8';
import { Route } from '@angular/router';
import { Router } from 'express';
import { CommonModule } from '@angular/common';
import { flatMap } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor(private serviceobject: ServiceService) { }
  title = 'Health_care';
  onClickLoginbutton:boolean=false;
  dataForPatient: any;
  dataForDoctor:any;
  checkPatientExists:boolean=false;
  checkDoctorExists:boolean=false;
  checkAdminExists:boolean=false;
  
  
  formgroupobject = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    role: new FormControl(),
    canActivate:new FormControl(false)
  })
  canChildActivateFunction()
  {
    const canActivateValue = this.formgroupobject.get('canActivate')!.value?? false;
    this.serviceobject.updatecanActivate(!canActivateValue);
  }
  getPatient() {
    this.serviceobject.getDataForPatient().subscribe(
      (i) => {
        this.dataForPatient = i;
      },
      (error) => {
        console.error('Error fetching patient data:', error);
      }
    );
  }
  getDoctor()
  {
    this.serviceobject.getDataForDoctor().subscribe((i)=>{this.dataForDoctor=i;});
  }
  checkDetails() {
    this.onClickLoginbutton=true
    if (!this.dataForPatient) {
      console.error('Patient data is undefined.');
      return;
    }
    if(this.formgroupobject.get('role')?.value==='Patient'){
    const idPatient =this.formgroupobject.get('id')?.value;
    const namePatient=this.formgroupobject.get('name')?.value;
    const rolepatient = this.formgroupobject.get('role')?.value;
    const patientExists = this.dataForPatient.some((patient: any) => patient.id === idPatient && patient.name==namePatient && rolepatient === 'Patient');
    this.checkPatientExists=patientExists
    const id =this.formgroupobject.get('id')?.value;
    const name=this.formgroupobject.get('name')?.value;
    this.serviceobject.updateInDashboards(name,id)
    console.log(name, id);
    }
    if (!this.dataForDoctor) {
      console.error('Doctor data is undefined.');
      return;
    }
    if(this.formgroupobject.get('role')?.value==='Doctor'){
    const idDoctor =this.formgroupobject.get('id')?.value;
    const nameDoctor=this.formgroupobject.get('name')?.value;
    const roleDoctor = this.formgroupobject.get('role')?.value;
    const doctorExists = this.dataForDoctor.some((doctor: any) => doctor.id === idDoctor && doctor.name==nameDoctor && roleDoctor === 'Doctor');
    this.checkDoctorExists=doctorExists
    const id =this.formgroupobject.get('id')?.value;
    const name=this.formgroupobject.get('name')?.value;
    this.serviceobject.updateInDashboards(name,id)
    }
    if(this.formgroupobject.get('role')?.value==='Admin')
    {
        const adminid=this.formgroupobject.get('id')?.value;
        const adminname=this.formgroupobject.get('name')?.value;
        if(adminid===1 && adminname==='Sravya'){
        this.checkAdminExists=true}
    }
  }
 
  
  ngOnInit(): void {
    this.getPatient();
    this.getDoctor();

}
registerHere:boolean=false;
register()
{
  this.registerHere=!this.registerHere
}
}
