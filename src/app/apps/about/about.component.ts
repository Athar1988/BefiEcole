import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../services/service.service';
import {Contact} from '../Modele/Contact';
import {Router} from '@angular/router';



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
 // contact : Contact;
  public aFormGroup!: FormGroup;
  public siteKey: any;

  title = 'Angular Google Maps Example';

  lat = 13;
  lng = 80;


  constructor(public formBuilder: FormBuilder, private service: ServiceService, private router: Router) {
  }


  trouve=false;

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    console.log(this.aFormGroup+" apres");
    this.siteKey = "6LdMol4dAAAAAJn1IE3V1Dv4cjoudpjgzPB_Gu0g";
    this.trouve=true;
  }


  ajoutContact(contact: Contact) {
    console.log(contact);
    this.service.enregistrerContact(contact).subscribe(
      data=>{
        console.log("contact ajouter avec succés");
      // this.toaster.success("Message envoyé avec succé!");
        this.router.navigate(['']);
      },

      err=>{
        console.log("Probleme de saisir! essayez une autre fois.");
       // this.toaster.error("Probleme de saisir! essayez une autre fois.");
      });
  }

//AIzaSyBi2q2VvTL9wJ2F9pp6ejqTO81Nh_G8oy8
}
