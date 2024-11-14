import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseChildComponent } from './reuse-child.component';

describe('ReuseChildComponent', () => {
  let component: ReuseChildComponent;
  let fixture: ComponentFixture<ReuseChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReuseChildComponent]
    });
    fixture = TestBed.createComponent(ReuseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
