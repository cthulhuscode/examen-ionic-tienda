import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CRUDproductosPage } from './crudproductos.page';

describe('CRUDProductosPage', () => {
  let component: CRUDproductosPage;
  let fixture: ComponentFixture<CRUDproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDproductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CRUDproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
