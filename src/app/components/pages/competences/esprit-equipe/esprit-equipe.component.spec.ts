import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspritEquipeComponent } from './esprit-equipe.component';

describe('EspritEquipeComponent', () => {
  let component: EspritEquipeComponent;
  let fixture: ComponentFixture<EspritEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspritEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspritEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
