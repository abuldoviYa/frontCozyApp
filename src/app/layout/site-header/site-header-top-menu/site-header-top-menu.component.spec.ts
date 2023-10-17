import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderTopMenuComponent } from './site-header-top-menu.component';

describe('SiteHeaderTopMenuComponent', () => {
  let component: SiteHeaderTopMenuComponent;
  let fixture: ComponentFixture<SiteHeaderTopMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteHeaderTopMenuComponent]
    });
    fixture = TestBed.createComponent(SiteHeaderTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
