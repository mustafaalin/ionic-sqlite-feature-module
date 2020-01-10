import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlacPage } from './ilac.page';

describe('IlacPage', () => {
  let component: IlacPage;
  let fixture: ComponentFixture<IlacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlacPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});