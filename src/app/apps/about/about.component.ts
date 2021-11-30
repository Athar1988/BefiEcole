import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  nom = '';
  message = '';
  objet = '';
  email = '';
  captcha='';
  telephone='';
  public aFormGroup!: FormGroup;
  public siteKey: any;

  constructor(public formBuilder: FormBuilder) {
  }

  title = 'recaptcha';
  trouve=false;
  ngOnInit() {
    console.log(this.aFormGroup+" avant");
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    console.log(this.aFormGroup+" apres");
    this.siteKey = "6LdMol4dAAAAAJn1IE3V1Dv4cjoudpjgzPB_Gu0g";
    this.trouve=true;
  }


  ajoutContact(value: any) {
    console.log(value);
    console.log(this.trouve);
  }


}
