import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { log } from 'node:console';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements CanActivate,OnInit,CanActivate,CanActivateChild {
  constructor(public http:HttpClient) { }
  canactivate:boolean=false;
  namearray:string[]=[]
  idarray:number[]=[]
  apiUrlGetForPatients = 'http://localhost:5016/GetAllPatients';
  apiUrlGetForDoctors ='http://localhost:5016/GetAllDoctors'
  apiUrlPostForPatients='http://localhost:5016/AddPatient'
  getDataForPatient(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetForPatients);
  }
  getDataForDoctor(): Observable<any> {
    return this.http.get<any>(this.apiUrlGetForDoctors);
  }

  postPatientData(dataToPostPatients:any): Observable<any> {
    return this.http.post<any>(this.apiUrlPostForPatients, dataToPostPatients);
  }

 
  // public name = new BehaviorSubject<string>('Default');
  // public id = new BehaviorSubject<number>(0);

  public name!: string;
  public id!: number;

  // currentname = this.name.asObservable();
  // currentid= this.id.asObservable();
  updateInDashboards(name: string, id: number) {
    this.name = name;
    this.id = id;
    console.log(this.name, this.id);
  }
 ngOnInit(): void {
 }
getDoctorsBySpecialization(specializationName: string): Observable<string[]> {
  const url = `http://localhost:5016/GetDoctorsBySpecialization?specializationName=${specializationName}`;
  return this.http.get<string[]>(url);
}
getPatientMedicines(patientId: number): Observable<any> {
  return this.http.get(`http://localhost:5016/GetMedicinesByPatientId?id=${patientId}`);
}
getAllAppointments(): Observable<any[]> {
  return this.http.get<any[]>(`http://localhost:5016/GetAllAppointments`);
}

getAllAppointmentsByPatientId(patientId: number): Observable<any[]> {
  const url = `http://localhost:5016/GetAllAppointmentsByPatientId?patientId=${patientId}`;
  return this.http.get<any[]>(url);
}
postAppointment(dataToPostAppointments:any): Observable<any> {
  return this.http.post<any>(`http://localhost:5016/AddAppointment`, dataToPostAppointments);
}
deleteDoctorById(doctorId: number) {
  return this.http.delete(`http://localhost:5016/DeleteDoctorById?doctorId=${doctorId}`);
}
deleteSpecializationById(specializationId: number) {
  return this.http.delete(`http://localhost:5016/DeleteSpecializationById?specializationId=${specializationId}`);
}
deleteAppointmentById(appointmentId: number) {
  return this.http.delete(`http://localhost:5016/DeleteAppointmentByAppointmentId?appointmentId=${appointmentId}`);
}
updateDoctorById(doctorId: number, newName: string, newSpecialization: string): Observable<any> {
  const url = `http://localhost:5016/UpdateDoctorByDoctorId?doctorId=${doctorId}`;
  const body = { specialization: newSpecialization, id:doctorId,name: newName };
  return this.http.put(url, body);
}
updateAppointmentById(appointmentId: number, appointmantDate: string, patietId:number,doctorId: number): Observable<any> {
  const url = `http://localhost:5016/UpdateAppointmentByAppointmentId?appointmentId=${doctorId}`;
  const body = { id:appointmentId,appointmentDateAndTime:appointmantDate,patientId:patietId,doctorId:doctorId};
  return this.http.put(url, body);
}
postDoctor(dataToDoctor:any): Observable<any> {
  return this.http.post(`http://localhost:5016/AddDoctor`,dataToDoctor);
}
updatecanActivate(canActivate:boolean)
{
  this.canactivate=canActivate
}
canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    return this.canactivate
}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canactivate
}
getAllPatients(): Observable<any[]> {
  return this.http.get<any[]>(`http://localhost:5016/GetAllPatients`);
}
getAllDoctors(): Observable<any[]> {
  return this.http.get<any[]>(`http://localhost:5016/GetAllDoctors`);
}
ViewAllDoctorsNames(): Observable<any[]> {
  return this.http.get<any[]>(`http://localhost:5016/GetDoctorNames`);
}
getDoctorByDoctorId(doctorId: number): Observable<any[]> {
  const url = `http://localhost:5016/GetDoctorById?id=${doctorId}`;
  return this.http.get<any[]>(url);
}
getAllAppointmentsByDoctorId(doctorId: number): Observable<any[]> {
  const url = `http://localhost:5016/GetAllAppointmentsByDoctorId?doctorId=${doctorId}`;
  return this.http.get<any[]>(url);
}
postMedicine(dataToPostMedicine:any): Observable<any> {
  return this.http.post<any>(`http://localhost:5016/AddMedications`, dataToPostMedicine);
}
}