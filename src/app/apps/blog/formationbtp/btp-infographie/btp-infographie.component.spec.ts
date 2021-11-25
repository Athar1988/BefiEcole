import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpInfographieComponent } from './btp-infographie.component';

describe('BtpInfographieComponent', () => {
  let component: BtpInfographieComponent;
  let fixture: ComponentFixture<BtpInfographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtpInfographieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpInfographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
