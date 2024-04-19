import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinetechComponent } from './cinetech.component';

describe('mainComponent', () => {
  let component: CinetechComponent;
  let fixture: ComponentFixture<CinetechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinetechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinetechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
