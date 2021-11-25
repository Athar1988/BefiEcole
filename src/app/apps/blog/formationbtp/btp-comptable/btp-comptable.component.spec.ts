import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpComptableComponent } from './btp-comptable.component';

describe('BtpComptableComponent', () => {
  let component: BtpComptableComponent;
  let fixture: ComponentFixture<BtpComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtpComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
