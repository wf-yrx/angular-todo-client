import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnExitComponent } from './un-exit.component';

describe('UnExitComponent', () => {
  let component: UnExitComponent;
  let fixture: ComponentFixture<UnExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
