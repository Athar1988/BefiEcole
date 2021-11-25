import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtpmultimediaComponent } from './btpmultimedia.component';

describe('BtpmultimediaComponent', () => {
  let component: BtpmultimediaComponent;
  let fixture: ComponentFixture<BtpmultimediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtpmultimediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtpmultimediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
