import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwiggyComp } from './swiggy-comp';

describe('SwiggyComp', () => {
  let component: SwiggyComp;
  let fixture: ComponentFixture<SwiggyComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiggyComp],
    }).compileComponents();

    fixture = TestBed.createComponent(SwiggyComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
