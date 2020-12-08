import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HostessListPage } from './hostess-list.page';

describe('HostessListPage', () => {
  let component: HostessListPage;
  let fixture: ComponentFixture<HostessListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostessListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HostessListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
