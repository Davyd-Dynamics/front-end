import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoriesListComponent } from './medical-histories-list.component';

describe('MedicalHistoriesListComponent', () => {
  let component: MedicalHistoriesListComponent;
  let fixture: ComponentFixture<MedicalHistoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalHistoriesListComponent]
    });
    fixture = TestBed.createComponent(MedicalHistoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
