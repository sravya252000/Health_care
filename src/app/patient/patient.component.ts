import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit{
  idValue!:number
  nameValue!:string
  doctors!: any[]
  specialization: string = '';
  patientId!: number 
  patientIdForAppointments!:number;
  medicines!: any[];
  appointments!: any[];
  calendarDays: Date[] = [];
  currentDate = new Date();
  appointmentsbyPatientId!:any[];
  scheduleAppointmetId!:number;
  scheduleAppointmentDate!:string;
  scheduleAppointmentpatientId!:number;
  scheduleDoctorId!:number
  constructor(public serviceobject:ServiceService,private cdr: ChangeDetectorRef){

  }
  selectedOption: string = 'healthServices';
  ngOnInit() {
    // this.serviceobject.currentname.subscribe((i)=>{this.n=i;this.cdr.detectChanges();});
    // this.serviceobject.currentid.subscribe((i)=>{this.d=i;this.cdr.detectChanges();})
    // this.nameValue = this.n;
    // this.idValue = this.d;
    this.nameValue = this.serviceobject.name;
    this.idValue = this.serviceobject.id;
    console.log(this.serviceobject.name, this.serviceobject.id ,this.nameValue, this.idValue, 'Hello');
    this.getAppointments();
  }
  hospitalDomains = [
    'Dental care',
    'Healthcare for children',
    'Heart care',
    'Bone and joint care',
    'Nervous system care',
    'Skin care',
    'Women\'s reproductive health',
    'Eye care',
    'Mental health care',
    'Cancer care',
    'Medical imaging',
    'Urinary tract and reproductive system care',
    'Digestive system care',
    'Hormonal disorders care',
    'Kidney care',
  ]; 
  getDoctorsBySpecialization(): void {
    this.serviceobject.getDoctorsBySpecialization(this.specialization)
        .subscribe(i=> this.doctors = i);
  }
  getPatientMedicines(): void {
    this.serviceobject.getPatientMedicines(this.patientId)
      .subscribe(data => {
        this.medicines = data;
      });
  }
  getAppointments(): void {
    this.serviceobject.getAllAppointments()
      .subscribe(appointments => {
        this.appointments = appointments;
        this.generateCalendar();
      });
  }

  generateCalendar(): void {
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(this.currentDate.getDate() + i);
      this.calendarDays.push(date);
    }
  }

   isAppointmentOnDate(date: Date): boolean {
     const formattedDate = date.toISOString().slice(0, 10);
     return this.appointments.some(appointment =>
       appointment.appointmentDateAndTime && appointment.appointmentDateAndTime.slice(0, 10) === formattedDate
     );
  }
    
  loadAppointments(): void {
    this.serviceobject.getAllAppointmentsByPatientId(this.patientIdForAppointments)
      .subscribe(data => {
        this.appointmentsbyPatientId = data;
      });
  }
  insertAppointment() {
    const data = {
      id:this.scheduleAppointmetId,appointmentDateAndTime:this.scheduleAppointmentDate,patientId:this.scheduleAppointmentpatientId,doctorId:this.scheduleDoctorId};
   this.serviceobject.postAppointment(data).subscribe(
      (response) => {
        console.log('Post successful', response);
      },
      (error) => {
        console.error('Error while posting data:', error);
      }
    );
  } 
}