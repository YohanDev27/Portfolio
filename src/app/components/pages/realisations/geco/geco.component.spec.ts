import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GecoComponent } from './geco.component';

describe('GecoComponent', () => {
  let component: GecoComponent;
  let fixture: ComponentFixture<GecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
