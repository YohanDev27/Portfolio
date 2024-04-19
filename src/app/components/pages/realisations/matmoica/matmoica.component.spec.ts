import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatmoicaComponent } from './matmoica.component';

describe('MatmoicaComponent', () => {
  let component: MatmoicaComponent;
  let fixture: ComponentFixture<MatmoicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatmoicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatmoicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
