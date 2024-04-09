import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorchildComponent } from './doctorchild.component';

describe('DoctorchildComponent', () => {
  let component: DoctorchildComponent;
  let fixture: ComponentFixture<DoctorchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorchildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
