import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarclientePage } from './agregarcliente.page';

describe('AgregarclientePage', () => {
  let component: AgregarclientePage;
  let fixture: ComponentFixture<AgregarclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
