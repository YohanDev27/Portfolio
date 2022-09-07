import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptageBtobComponent } from './comptage-btob.component';

describe('ComptageBtobComponent', () => {
  let component: ComptageBtobComponent;
  let fixture: ComponentFixture<ComptageBtobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptageBtobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptageBtobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
