import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../services/service.service';
import {Contact} from '../Modele/Contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import * as L from 'leaflet';


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
  telephone='';
  public aFormGroup!: FormGroup;
  public siteKey: any;
 // public  sitekey='';
  //theme='';
  type='';
  size='';
  h1='';
  id: any;
  trouve=false;
  title: string = 'AGM project';
  messageerreur=0;
  captcha=false;
  constructor(public formBuilder: FormBuilder,
              private service: ServiceService,
              private router: Router,
              private toaster: ToastrService,
              activatedRouter: ActivatedRoute
              ) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
    this.siteKey='6LcbVIodAAAAAG2FECtHPeigiXOG_ghInhtBCs5c';
  }


  ngOnInit() {
/* code carte de MAPS */
    const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);
/*************************************/
    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    L.marker([34.73324, 10.75057], {icon: myIcon}).bindPopup('Je suis IFT').addTo(myfrugalmap).openPopup();


    /* code de captcha*/
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }


  handleSuccess(data: any){
    console.log(data);
    this.captcha=true;
  }

  handleExpire(){

  }
  handleReset(){

  }
  ajoutContact(contact: Contact) {
    if(this.captcha==true){
      this.messageerreur=0;
      console.log(contact);
      this.service.enregistrerContact(contact).subscribe(
        data=>{
          console.log("contact ajouter avec succés");
          this.toaster.info("Message envoyé avec succé!");
          this.trouve=true;
          console.log(this.trouve);
          this.router.navigate(['about',this.trouve]);
        },
        err=>{
          console.log("Probleme de saisir! essayez une autre fois.");
          // this.toaster.error("Probleme de saisir! essayez une autre fois.");
        });
    }
    else{
      this.messageerreur=1;
      console.log("Probleme captcha.");
    }



  }

//AIzaSyBi2q2VvTL9wJ2F9pp6ejqTO81Nh_G8oy8

}
