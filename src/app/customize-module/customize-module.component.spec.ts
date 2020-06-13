import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeModuleComponent } from './customize-module.component';

describe('CustomizeModuleComponent', () => {
  let component: CustomizeModuleComponent;
  let fixture: ComponentFixture<CustomizeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
