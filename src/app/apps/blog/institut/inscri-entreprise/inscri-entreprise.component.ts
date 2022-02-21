import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '../../../services/toast.service';
import {ServiceService} from '../../../services/service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Entreprise} from '../../../Modele/Entreprise';
import {ToastrService} from 'ngx-toastr';

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
  id: any;
  messageerreur=0;
  captcha=false;

  constructor(public toastService: ToastService,
              public formBuilder: FormBuilder,
              private service: ServiceService,
              private router: Router,
              private activatedRouter: ActivatedRoute,
              private toaster: ToastrService
              ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    this.siteKey='6LcbVIodAAAAAG2FECtHPeigiXOG_ghInhtBCs5c';
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    this.siteKey = "6LdMol4dAAAAAJn1IE3V1Dv4cjoudpjgzPB_Gu0g";
    //this.trouve=true;
  }



  ajoutEtreprise(entreprise: Entreprise) {
   /* if(this.captcha==true) {*/
      this.service.enregistrerEntreprise(entreprise).subscribe(
        data => {
          console.log("entreprise ajouter avec succés");
          // this.toaster.success("Message envoyé avec succé!");
          this.toaster.info("Message envoyé avec succé!");
          //this.trouve = true;
         // console.log(this.trouve);
          this.router.navigate(['']);
        },

        err => {
          console.log("Probleme de saisir! essayez une autre fois.");
          // this.toaster.error("Probleme de saisir! essayez une autre fois.");
        });
   /* }
    else{
      this.messageerreur=1;
      console.log("Probleme captcha.");
    }*/
  }


}
