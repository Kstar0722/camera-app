import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraHeaderComponent } from './camera-header.component';

describe('CameraHeaderComponent', () => {
  let component: CameraHeaderComponent;
  let fixture: ComponentFixture<CameraHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
