import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpventeComponent } from './btpvente.component';

describe('BtpventeComponent', () => {
  let component: BtpventeComponent;
  let fixture: ComponentFixture<BtpventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtpventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
