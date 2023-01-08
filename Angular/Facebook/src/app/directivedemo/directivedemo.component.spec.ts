import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivedemoComponent } from './directivedemo.component';

describe('DirectivedemoComponent', () => {
  let component: DirectivedemoComponent;
  let fixture: ComponentFixture<DirectivedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivedemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
