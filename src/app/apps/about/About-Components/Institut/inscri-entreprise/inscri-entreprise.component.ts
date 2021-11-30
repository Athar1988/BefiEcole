import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscri-entreprise',
  templateUrl: './inscri-entreprise.component.html',
  styleUrls: ['./inscri-entreprise.component.css']
})
export class InscriEntrepriseComponent implements OnInit {

  nom = '';
  message = '';
  objet = '';
  email = '';
  captcha='';
  telephone='';
  constructor() { }

  ngOnInit(): void {
  }

}
