import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedagogieComponent } from './pedagogie.component';

describe('PedagogieComponent', () => {
  let component: PedagogieComponent;
  let fixture: ComponentFixture<PedagogieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedagogieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedagogieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
