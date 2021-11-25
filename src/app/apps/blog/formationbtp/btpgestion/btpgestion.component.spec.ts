import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpgestionComponent } from './btpgestion.component';

describe('BtpgestionComponent', () => {
  let component: BtpgestionComponent;
  let fixture: ComponentFixture<BtpgestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtpgestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
