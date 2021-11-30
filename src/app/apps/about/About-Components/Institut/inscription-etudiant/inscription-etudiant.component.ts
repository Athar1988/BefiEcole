import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription-etudiant',
  templateUrl: './inscription-etudiant.component.html',
  styleUrls: ['./inscription-etudiant.component.css']
})
export class InscriptionEtudiantComponent implements OnInit {
  filiere='';
  nom = '';
  telephone='';
  datenaissance='';
  lieudenaissance='';
  nationalite='';
  adresse='';
  ville='';
  pays='';
  niveauetude='';
  message = '';
  email = '';
  captcha='';

  constructor() { }

  ngOnInit(): void {
  }

  ajoutEtudiant(value: any) {
    console.log(value);
  }
}
