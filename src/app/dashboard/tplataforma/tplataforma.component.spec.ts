import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TplataformaComponent } from './tplataforma.component';

describe('TplataformaComponent', () => {
  let component: TplataformaComponent;
  let fixture: ComponentFixture<TplataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TplataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TplataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
