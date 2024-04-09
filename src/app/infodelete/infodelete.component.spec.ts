import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfodeleteComponent } from './infodelete.component';

describe('InfodeleteComponent', () => {
  let component: InfodeleteComponent;
  let fixture: ComponentFixture<InfodeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfodeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfodeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
