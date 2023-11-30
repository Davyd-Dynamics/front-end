import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsListsComponent } from './doctors-lists.component';

describe('DoctorsListsComponent', () => {
  let component: DoctorsListsComponent;
  let fixture: ComponentFixture<DoctorsListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorsListsComponent]
    });
    fixture = TestBed.createComponent(DoctorsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
