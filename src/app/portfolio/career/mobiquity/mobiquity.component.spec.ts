import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobiquityComponent } from './mobiquity.component';

describe('MobiquityComponent', () => {
  let component: MobiquityComponent;
  let fixture: ComponentFixture<MobiquityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobiquityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobiquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
