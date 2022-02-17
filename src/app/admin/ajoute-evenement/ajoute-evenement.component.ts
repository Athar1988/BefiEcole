import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../apps/services/service.service';

@Component({
  selector: 'app-ajoute-evenement',
  templateUrl: './ajoute-evenement.component.html',
  styleUrls: ['./ajoute-evenement.component.css']
})
export class AjouteEvenementComponent implements OnInit {
  listes: any;
  affichage:any;
  entreprises:any
  constructor(private router:Router,
              private route:ActivatedRoute,
              private service:ServiceService) { }

  ngOnInit(): void {
    this.affichage=this.route.snapshot.params.id;
    if(this.affichage=="entreprise"){
      this.service.get('entreprises').subscribe(
        data=>{
          this.listes=data;
          console.log(this.listes);
        },
        err=>{
          console.log("erreur de reseau");
        }
      )
    }


    if(this.affichage=="etudiant"){
      this.service.get('etudiants').subscribe(
        data=>{
          this.listes=data;
          console.log(this.listes);
        },
        err=>{
          console.log("erreur de reseau");
        }
      )
    }



    if(this.affichage=="evenement"){


    }
  }


  action(affichage:any){
    if(affichage=="entreprise"){
      this.router.navigateByUrl('administration/entreprise');
    }
    if(affichage=="etudiant"){
      this.router.navigateByUrl('administration/etudiant');
    }
    if(affichage=="evenement"){
      this.router.navigateByUrl('administration/evenement');
    }
}

}
