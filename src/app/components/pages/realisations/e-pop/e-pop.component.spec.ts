import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EPopComponent } from './e-pop.component';

describe('EPopComponent', () => {
  let component: EPopComponent;
  let fixture: ComponentFixture<EPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EPopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
