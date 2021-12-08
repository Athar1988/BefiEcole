import { Component, OnInit } from '@angular/core';
import {ToastService} from '../../../../services/toast.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../../../services/service.service';
import {Etudiant} from '../../../../Modele/Etudiant';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

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
  id: any;
  constructor(public toastService: ToastService,
              public formBuilder: FormBuilder,
              public service: ServiceService,
              public router:Router,
              private activatedRouter: ActivatedRoute,
              private toaster: ToastrService) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
    console.log(this.id+" id");
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

  ajoutEtudiant(etudiant: Etudiant) {
    this.service.enregistrerEtudiant(etudiant).subscribe(
      data=>{
        console.log("etudiant ajouter avec succés");
        this.toaster.info("Inscription envoyé avec succé!");
        this.trouve=true;
        console.log(this.trouve);
        this.router.navigate(['inscriptionEtudiant',this.trouve]);
      },

      err=>{
        console.log("Probleme de saisir! essayez une autre fois.");
        // this.toaster.error("Probleme de saisir! essayez une autre fois.");
      });
  }


}
