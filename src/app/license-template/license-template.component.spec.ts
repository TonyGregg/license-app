import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseTemplateComponent } from './license-template.component';

describe('LicenseTemplateComponent', () => {
  let component: LicenseTemplateComponent;
  let fixture: ComponentFixture<LicenseTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenseTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
