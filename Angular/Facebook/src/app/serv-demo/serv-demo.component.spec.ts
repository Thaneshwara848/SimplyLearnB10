import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServDemoComponent } from './serv-demo.component';

describe('ServDemoComponent', () => {
  let component: ServDemoComponent;
  let fixture: ComponentFixture<ServDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
