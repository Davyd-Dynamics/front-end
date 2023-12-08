import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyRequestsListComponent } from './emergency-requests-list.component';

describe('EmergencyRequestsListComponent', () => {
  let component: EmergencyRequestsListComponent;
  let fixture: ComponentFixture<EmergencyRequestsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyRequestsListComponent]
    });
    fixture = TestBed.createComponent(EmergencyRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
