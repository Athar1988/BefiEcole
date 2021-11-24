import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriEntrepriseComponent } from './inscri-entreprise.component';

describe('InscriEntrepriseComponent', () => {
  let component: InscriEntrepriseComponent;
  let fixture: ComponentFixture<InscriEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
