import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridwallComponent } from './gridwall.component';

describe('GridwallComponent', () => {
  let component: GridwallComponent;
  let fixture: ComponentFixture<GridwallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridwallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridwallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
