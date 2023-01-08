import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletdrivefromComponent } from './templetdrivefrom.component';

describe('TempletdrivefromComponent', () => {
  let component: TempletdrivefromComponent;
  let fixture: ComponentFixture<TempletdrivefromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempletdrivefromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempletdrivefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
