import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenueCompteComponent } from './tenue-compte.component';

describe('TenueCompteComponent', () => {
  let component: TenueCompteComponent;
  let fixture: ComponentFixture<TenueCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenueCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenueCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
