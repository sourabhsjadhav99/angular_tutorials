import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServicesComponent } from './about-services.component';

describe('AboutServicesComponent', () => {
  let component: AboutServicesComponent;
  let fixture: ComponentFixture<AboutServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutServicesComponent]
    });
    fixture = TestBed.createComponent(AboutServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
