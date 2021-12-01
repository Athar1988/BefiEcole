import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '../../../../services/toast.service';

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

  ajoutEtreprise(value: any) {
    console.log(value);

  }
}
