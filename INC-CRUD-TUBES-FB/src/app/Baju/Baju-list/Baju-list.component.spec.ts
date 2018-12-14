/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BajuListComponent } from './Baju-list.component';

describe('BajuListComponent', () => {
  let component: BajuListComponent;
  let fixture: ComponentFixture<BajuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
