import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockBarComponent } from './clock-bar.component';

describe('ClockBarComponent', () => {
  let component: ClockBarComponent;
  let fixture: ComponentFixture<ClockBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
