import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookeventsComponent } from './facebookevents.component';

describe('FacebookeventsComponent', () => {
  let component: FacebookeventsComponent;
  let fixture: ComponentFixture<FacebookeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
