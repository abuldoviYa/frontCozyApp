import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeaderMiddleComponent } from './site-header-middle.component';

describe('SiteHeaderMiddleComponent', () => {
  let component: SiteHeaderMiddleComponent;
  let fixture: ComponentFixture<SiteHeaderMiddleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteHeaderMiddleComponent]
    });
    fixture = TestBed.createComponent(SiteHeaderMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
