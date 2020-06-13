import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCapabilitesComponent } from './key-capabilites.component';

describe('KeyCapabilitesComponent', () => {
  let component: KeyCapabilitesComponent;
  let fixture: ComponentFixture<KeyCapabilitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyCapabilitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyCapabilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
