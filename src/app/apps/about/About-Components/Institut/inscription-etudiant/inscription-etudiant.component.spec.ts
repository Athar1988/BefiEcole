import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEtudiantComponent } from './inscription-etudiant.component';

describe('InscriptionEtudiantComponent', () => {
  let component: InscriptionEtudiantComponent;
  let fixture: ComponentFixture<InscriptionEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
