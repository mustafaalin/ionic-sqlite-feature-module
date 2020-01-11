import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalizPage } from './analiz.page';

describe('AnalizPage', () => {
  let component: AnalizPage;
  let fixture: ComponentFixture<AnalizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalizPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
