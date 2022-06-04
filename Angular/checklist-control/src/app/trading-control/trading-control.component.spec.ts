import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingControlComponent } from './trading-control.component';

describe('TradingControlComponent', () => {
  let component: TradingControlComponent;
  let fixture: ComponentFixture<TradingControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
