import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebulaDetailsComponent } from './nebula-details.component';

describe('NebulaDetailsComponent', () => {
  let component: NebulaDetailsComponent;
  let fixture: ComponentFixture<NebulaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NebulaDetailsComponent]
    });
    fixture = TestBed.createComponent(NebulaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
