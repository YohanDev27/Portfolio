import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudJetComponent } from './bud-jet.component';

describe('BudJetComponent', () => {
  let component: BudJetComponent;
  let fixture: ComponentFixture<BudJetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudJetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudJetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
