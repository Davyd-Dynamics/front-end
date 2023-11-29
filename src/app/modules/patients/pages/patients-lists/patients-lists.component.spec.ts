import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatiensListsComponent } from './patients-lists.component';

describe('PatiensListsComponent', () => {
  let component: PatiensListsComponent;
  let fixture: ComponentFixture<PatiensListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatiensListsComponent]
    });
    fixture = TestBed.createComponent(PatiensListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
