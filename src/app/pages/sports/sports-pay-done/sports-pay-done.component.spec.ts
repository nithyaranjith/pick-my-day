import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsPayDoneComponent } from './sports-pay-done.component';

describe('SportsPayDoneComponent', () => {
  let component: SportsPayDoneComponent;
  let fixture: ComponentFixture<SportsPayDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportsPayDoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SportsPayDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
