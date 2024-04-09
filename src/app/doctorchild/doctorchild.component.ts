import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-doctorchild',
  templateUrl: './doctorchild.component.html',
  styleUrl: './doctorchild.component.css'
})
export class DoctorchildComponent {
  selectedOption: string = 'healthServices';
constructor(public serviceobject:ServiceService){}
allDoctors:any;
allPatients:any;
doctorNames:any;
getdoctorbyid:any;
doctorId!:number;
doctorIdForAppointment:any;
getappointmentsbydoctorid:any
medicineId!:number
medicineName!:string
dosage!:number
frequency!:string
duration!:string
PatientIDForMedicine!:number
  getAllDoctors() {
    this.serviceobject.getAllDoctors().subscribe(
      (i) => {
        this.allDoctors = i;
      },
      (error) => {
        console.error('Error fetching Doctor data:', error);
      }
    );
  }
  getAllPatients() {
    this.serviceobject.getAllPatients().subscribe(
      (i) => {
        this.allPatients = i;
      },
      (error) => {
        console.error('Error fetching  petients data:', error);
      }
    );
  }
  getAllDoctorNames() {
    this.serviceobject.ViewAllDoctorsNames().subscribe(
      (i) => {
        this.doctorNames = i;
      },
      (error) => {
        console.error('Error fetching  petients data:', error);
      }
    );
  }
  getDoctorByDoctorId(): void {
    this.serviceobject.getDoctorByDoctorId(this.doctorId)
        .subscribe(i=> this.getdoctorbyid = i);
  }
  getAllAppointmentsByDoctorID():void{
    this.serviceobject.getDoctorByDoctorId(this.doctorIdForAppointment)
        .subscribe(i=> this.getappointmentsbydoctorid= i);
  }
  addMedicine() {
    const data = {
      id:this.medicineId,medicineName:this.medicineName,dosage:this.dosage,frequency:this.frequency,duration:this.duration,patientId:this.PatientIDForMedicine
    };
    this.serviceobject.postMedicine(data).subscribe(
      (response) => {
        console.log('Post successful', response);
      },
      (error) => {
        console.error('Error while posting data:', error);
      }
    );
  } 
}
