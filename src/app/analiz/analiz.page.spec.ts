import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnalizPage } from './analiz.page';

describe('AnalizPage', () => {
  let component: AnalizPage;
  let fixture: ComponentFixture<AnalizPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalizPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalizPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
