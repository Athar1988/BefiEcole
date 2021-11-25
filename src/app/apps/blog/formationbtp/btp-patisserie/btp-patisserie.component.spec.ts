import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpPatisserieComponent } from './btp-patisserie.component';

describe('BtpPatisserieComponent', () => {
  let component: BtpPatisserieComponent;
  let fixture: ComponentFixture<BtpPatisserieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtpPatisserieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpPatisserieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
