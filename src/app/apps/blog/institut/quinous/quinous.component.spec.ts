import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinousComponent } from './quinous.component';

describe('QuinousComponent', () => {
  let component: QuinousComponent;
  let fixture: ComponentFixture<QuinousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuinousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
