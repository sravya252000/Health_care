import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(private serviceobject: ServiceService) { }

  doctorSpecializationName!:string; 
  name!: string;
  id!: number;
  showDomains = false; 
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
    'Respiratory system care',
    'Blood-related disorders care',
    'Musculoskeletal and autoimmune disorders care',
    'Care for infectious illnesses',
    'Care for allergies and immune system disorders'
  ]; 

  listOfDomains() {
    this.showDomains = !this.showDomains;
  }

  register() {
    const data = {
      id:this.id,name:this.name,doctorSecializationName:this.doctorSpecializationName
    };
  
    this.serviceobject.postPatientData(data).subscribe(
      (response) => {
        console.log('Post successful', response);
      },
      (error) => {
        console.error('Error while posting data:', error);
      }
    );
  } 
  ngOnInit(): void {
  } 
}