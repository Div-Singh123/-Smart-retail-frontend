import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeStockComponent } from './real-time-stock.component';

describe('RealTimeStockComponent', () => {
  let component: RealTimeStockComponent;
  let fixture: ComponentFixture<RealTimeStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
