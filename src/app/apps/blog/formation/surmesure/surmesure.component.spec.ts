import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurmesureComponent } from './surmesure.component';

describe('SurmesureComponent', () => {
  let component: SurmesureComponent;
  let fixture: ComponentFixture<SurmesureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurmesureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurmesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
