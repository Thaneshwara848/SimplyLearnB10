import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivedrivenfromComponent } from './reactivedrivenfrom.component';

describe('ReactivedrivenfromComponent', () => {
  let component: ReactivedrivenfromComponent;
  let fixture: ComponentFixture<ReactivedrivenfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivedrivenfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivedrivenfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
