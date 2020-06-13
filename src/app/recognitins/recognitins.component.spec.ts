import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognitinsComponent } from './recognitins.component';

describe('RecognitinsComponent', () => {
  let component: RecognitinsComponent;
  let fixture: ComponentFixture<RecognitinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognitinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognitinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
