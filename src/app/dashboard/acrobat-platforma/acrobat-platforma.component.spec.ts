import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcrobatPlatformaComponent } from './acrobat-platforma.component';

describe('AcrobatPlatformaComponent', () => {
  let component: AcrobatPlatformaComponent;
  let fixture: ComponentFixture<AcrobatPlatformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcrobatPlatformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcrobatPlatformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
