import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpCommerceComponent } from './btp-commerce.component';

describe('BtpCommerceComponent', () => {
  let component: BtpCommerceComponent;
  let fixture: ComponentFixture<BtpCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtpCommerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
