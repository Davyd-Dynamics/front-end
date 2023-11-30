import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyRequestModalComponent } from './emergency-request-modal.component';

describe('EmergencyRequestModalComponent', () => {
  let component: EmergencyRequestModalComponent;
  let fixture: ComponentFixture<EmergencyRequestModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyRequestModalComponent]
    });
    fixture = TestBed.createComponent(EmergencyRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
