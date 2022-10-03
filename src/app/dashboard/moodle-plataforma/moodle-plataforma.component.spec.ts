import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodlePlataformaComponent } from './moodle-plataforma.component';

describe('MoodlePlataformaComponent', () => {
  let component: MoodlePlataformaComponent;
  let fixture: ComponentFixture<MoodlePlataformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodlePlataformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodlePlataformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
