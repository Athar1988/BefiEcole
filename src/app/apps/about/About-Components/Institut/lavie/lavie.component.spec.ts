import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavieComponent } from './lavie.component';

describe('LavieComponent', () => {
  let component: LavieComponent;
  let fixture: ComponentFixture<LavieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LavieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
