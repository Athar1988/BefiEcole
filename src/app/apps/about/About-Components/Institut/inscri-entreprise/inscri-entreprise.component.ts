import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '../../../../services/toast.service';
import {ServiceService} from '../../../../services/service.service';
import {Router} from '@angular/router';
import {Entreprise} from '../../../../Modele/Entreprise';

@Component({
  selector: 'app-inscri-entreprise',
  templateUrl: './inscri-entreprise.component.html',
  styleUrls: ['./inscri-entreprise.component.css']
})
export class InscriEntrepriseComponent implements OnInit {

  civilite='';
  nom='';
  prenom='';
  fonction='';
  telephone='';
  modile='';
  activite='';
  email='';
  message='';
  public aFormGroup!: FormGroup;
  public siteKey: any;
  trouve=false;
  captcha='';

  constructor(public toastService: ToastService,
              public formBuilder: FormBuilder,
              private service: ServiceService,
              private router: Router) {}

  ngOnInit(): void {
    console.log(this.aFormGroup+" avant");
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    console.log(this.aFormGroup+" apres");
    this.siteKey = "6LdMol4dAAAAAJn1IE3V1Dv4cjoudpjgzPB_Gu0g";
    this.trouve=true;
  }

  ajoutEtreprise(entreprise: Entreprise) {
    this.service.enregistrerEntreprise(entreprise).subscribe(
      data=>{
        console.log("entreprise ajouter avec succés");
        // this.toaster.success("Message envoyé avec succé!");
        this.router.navigate(['']);
      },

      err=>{
        console.log("Probleme de saisir! essayez une autre fois.");
        // this.toaster.error("Probleme de saisir! essayez une autre fois.");
      });
  }
}
