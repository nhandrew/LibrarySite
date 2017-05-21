import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookpostsComponent } from './facebookposts.component';

describe('FacebookpostsComponent', () => {
  let component: FacebookpostsComponent;
  let fixture: ComponentFixture<FacebookpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
