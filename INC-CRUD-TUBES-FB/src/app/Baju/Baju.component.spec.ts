/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BajuComponent } from './Baju.component';

describe('BajuComponent', () => {
  let component: BajuComponent;
  let fixture: ComponentFixture<BajuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
