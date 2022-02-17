import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteEvenementComponent } from './ajoute-evenement.component';

describe('AjouteEvenementComponent', () => {
  let component: AjouteEvenementComponent;
  let fixture: ComponentFixture<AjouteEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
