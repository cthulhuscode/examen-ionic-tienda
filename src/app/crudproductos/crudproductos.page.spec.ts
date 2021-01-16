import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CRUDProductosPage } from './crudproductos.page';

describe('CRUDProductosPage', () => {
  let component: CRUDProductosPage;
  let fixture: ComponentFixture<CRUDProductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDProductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CRUDProductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
