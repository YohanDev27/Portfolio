import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravailEquipeComponent } from './travail-equipe.component';

describe('TravailEquipeComponent', () => {
  let component: TravailEquipeComponent;
  let fixture: ComponentFixture<TravailEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravailEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravailEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
