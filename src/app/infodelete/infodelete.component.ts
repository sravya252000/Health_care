import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-infodelete',
  templateUrl: './infodelete.component.html',
  styleUrl: './infodelete.component.css'
})
export class InfodeleteComponent  implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  constructor(private serviceobject:ServiceService){}
  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }
  doctorId!:number;
  specializationId!:number;
  appointmentId!:number;
  deleteDoctor() {
    this.serviceobject.deleteDoctorById(this.doctorId)
      .subscribe(
        () => {
          console.log(`Doctor with ID ${this.doctorId} deleted successfully.`);
        },
        error => {
          console.error('Error deleting doctor:', error);
        }
      );
  }
  deleteSpecialization() {
    this.serviceobject.deleteSpecializationById(this.specializationId)
      .subscribe(
        () => {
          console.log(`Specialization with ID ${this.specializationId} deleted successfully.`);
        },
        error => {
          console.error('Error deleting doctor:', error);
        }
      );
  }
  deleteAppointment() {
    this.serviceobject.deleteAppointmentById(this.appointmentId)
      .subscribe(
        () => {
          console.log(`Appointment with ID ${this.appointmentId} deleted successfully.`);
        },
        error => {
          console.error('Error deleting doctor:', error);
        }
      );
  }
  @ContentChild('destroyref') destroyref!: ElementRef;

  ngOnInit() {
    console.log('Init in child');
  }

  ngOnChanges() {
    console.log('On changes in child');
  }

  ngDoCheck() {
    console.log('Docheck in child');
  }

  ngAfterViewInit() {
    console.log('View init in child');
  }

  ngAfterViewChecked() {
    console.log('View checked in child');
  }

  ngAfterContentInit() {
    console.log('Content init in child');
    console.log(this.destroyref);
  }

  ngAfterContentChecked() {
    console.log('Content checked in child');
  }

  ngOnDestroy() {
    console.log('Destroy in child');
  }
}
