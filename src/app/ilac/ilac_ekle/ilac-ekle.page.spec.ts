import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlacEklePage } from './ilac-ekle.page';

describe('IlacEklePage', () => {
  let component: IlacEklePage;
  let fixture: ComponentFixture<IlacEklePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlacEklePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlacEklePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});