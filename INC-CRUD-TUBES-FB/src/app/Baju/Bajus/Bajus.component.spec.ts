/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BajusComponent } from './Bajus.component';

describe('BajusComponent', () => {
  let component: BajusComponent;
  let fixture: ComponentFixture<BajusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
