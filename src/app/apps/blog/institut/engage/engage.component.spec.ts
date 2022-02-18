import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageComponent } from './engage.component';

describe('EngageComponent', () => {
  let component: EngageComponent;
  let fixture: ComponentFixture<EngageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
