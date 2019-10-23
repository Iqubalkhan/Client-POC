import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingWindowComponent } from './booking-window.component';

describe('BookingWindowComponent', () => {
  let component: BookingWindowComponent;
  let fixture: ComponentFixture<BookingWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
