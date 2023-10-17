import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallMenuDropdownComponent } from './small-menu-dropdown.component';

describe('SmallMenuDropdownComponent', () => {
  let component: SmallMenuDropdownComponent;
  let fixture: ComponentFixture<SmallMenuDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallMenuDropdownComponent]
    });
    fixture = TestBed.createComponent(SmallMenuDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
