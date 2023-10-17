import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderLowComponent } from './site-header-low.component';

describe('SiteHeaderLowComponent', () => {
  let component: SiteHeaderLowComponent;
  let fixture: ComponentFixture<SiteHeaderLowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteHeaderLowComponent]
    });
    fixture = TestBed.createComponent(SiteHeaderLowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
