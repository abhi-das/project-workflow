import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectStatusComponent } from './rect-status.component';

describe('NgComponentAbdasComponent', () => {
  let component: RectStatusComponent;
  let fixture: ComponentFixture<RectStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RectStatusComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
