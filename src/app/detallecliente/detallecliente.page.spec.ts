import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleclientePage } from './detallecliente.page';

describe('DetalleclientePage', () => {
  let component: DetalleclientePage;
  let fixture: ComponentFixture<DetalleclientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleclientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
