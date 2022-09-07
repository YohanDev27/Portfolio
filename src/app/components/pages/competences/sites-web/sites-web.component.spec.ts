import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesWebComponent } from './sites-web.component';

describe('SitesWebComponent', () => {
  let component: SitesWebComponent;
  let fixture: ComponentFixture<SitesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
