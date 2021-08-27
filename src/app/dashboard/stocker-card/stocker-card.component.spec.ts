import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockerCardComponent } from './stocker-card.component';

describe('StockerCardComponent', () => {
  let component: StockerCardComponent;
  let fixture: ComponentFixture<StockerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
