import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InovComponent } from './inov.component';

describe('InovComponent', () => {
  let component: InovComponent;
  let fixture: ComponentFixture<InovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
