import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-infoupdate',
  templateUrl: './infoupdate.component.html',
  styleUrl: './infoupdate.component.css'
})
export class InfoupdateComponent {
  constructor(private serviceobject:ServiceService){}
  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }
  specialization!:string;
  doctorId!:number;
  doctorName!:string;
   appointmentId!:number;
   appointmentDate!:string;
   patientId!:number;
   appointmentDoctorId!:number;
   addDcotorId!:number;
   addDoctorName!:string;
   addDoctorSpecialization!:string;
   appointments!: any[];
   appointmentIdSearchText: string = '';
   updateDoctor(): void {
    this.serviceobject.updateDoctorById(this.doctorId,this.doctorName,this.specialization)
      .subscribe(response => {
        console.log('Doctor updated successfully:', response);
      }, error => {
        console.error('Error updating doctor:', error);
      });
  }
   updateAppointment(): void {
    this.serviceobject.updateAppointmentById(this.appointmentId,this.appointmentDate,this.patientId,this.appointmentDoctorId)
      .subscribe(response => {
        console.log('Appointment updated successfully:', response);
      }, error => {
        console.error('Error updating Appointment:', error);
      });
   }
   addDoctor() {
    const data = {
      id:this.addDcotorId,name:this.addDoctorName,specialization:this.addDoctorSpecialization
    };
    this.serviceobject.postDoctor(data).subscribe(
      (response) => {
        console.log('Post successful', response);
      },
      (error) => {
        console.error('Error while posting data:', error);
      }
    );
  } 
  getAppointments(): void {
    this.serviceobject.getAllAppointments()
      .subscribe(appointments => {
        this.appointments = appointments;
      });
  }
  filterAppointments(): any[] {
    return this.appointments.filter(appointment => {
      return appointment.id.toString().includes(this.appointmentIdSearchText);
    });
  }
}
