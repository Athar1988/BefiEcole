import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../../../services/toast.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscription-etudiant',
  templateUrl: './inscription-etudiant.component.html',
  styleUrls: ['./inscription-etudiant.component.css']
})
export class InscriptionEtudiantComponent implements OnInit {
  filiere='';
  nom = '';
  prenom='';
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
  public aFormGroup!: FormGroup;
  public siteKey: any;
  trouve=false;
  constructor(public toastService: ToastService, public formBuilder: FormBuilder) {}


  ngOnInit(): void {
    console.log(this.aFormGroup+" avant");
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    console.log(this.aFormGroup+" apres");
    this.siteKey = "6LdMol4dAAAAAJn1IE3V1Dv4cjoudpjgzPB_Gu0g";
    this.trouve=true;
  }

  /*ajoutEtudiant(value: any) {
    console.log(value);
   // this.toaster.success(`L'inscription de {value.nom} {value.prenom} a été ajuoté avec succès`);
    this.router.navigate(['']);
  }*/

  ajoutEtudiant(value: any) {
     console.log(value);
     }


}
