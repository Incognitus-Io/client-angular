import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncognitusComponent } from '../incognitus.component';

describe('IncognitusComponent', () => {
  let component: IncognitusComponent;
  let fixture: ComponentFixture<IncognitusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncognitusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncognitusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
