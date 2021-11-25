import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpdouanieresComponent } from './btpdouanieres.component';

describe('BtpdouanieresComponent', () => {
  let component: BtpdouanieresComponent;
  let fixture: ComponentFixture<BtpdouanieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtpdouanieresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpdouanieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
