import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoupdateComponent } from './infoupdate.component';

describe('InfoupdateComponent', () => {
  let component: InfoupdateComponent;
  let fixture: ComponentFixture<InfoupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
