import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../apps/services/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-inscription',
  templateUrl: './admin-inscription.component.html',
  styleUrls: ['./admin-inscription.component.css']
})
export class AdminInscriptionComponent implements OnInit {
  login: any;
  admin='';
  motdepasse='';
  trouve:any;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  Login(credentials: any) {
    this.service.recupererLogin().subscribe(
      data=>{
        this.login=data;
        this.trouve=false;
        for(let i=0 ; i< this.login._embedded.logins.length; i++) {
          if (this.login._embedded.logins[i].login == credentials.admin && this.login._embedded.logins[i].motdepasse == credentials.motdepasse) {
            localStorage.setItem('admin', 'true');
            this.trouve=true;
            this.router.navigate(['/administration/entreprise']);
          }
        }
        console.log(this.login)},
      err=>{console.log("probleme reseau")}
    )
  }
}
