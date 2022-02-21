import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../apps/services/service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ajoute-evenement',
  templateUrl: './ajoute-evenement.component.html',
  styleUrls: ['./ajoute-evenement.component.css']
})
export class AjouteEvenementComponent implements OnInit {
  listes: any;
  affichage:any;
  entreprises:any;
  selectedFile='';
  listeImage:any;
  host='https://befi.herokuapp.com/';
  //host='http://localhost:8080/';
  constructor(private router:Router,
              private route:ActivatedRoute,
              private service:ServiceService,
              private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      param => {
        this.affichage = param['id']
      }
      );
    if(this.affichage=="entreprise"){
      this.service.get('entreprises').subscribe(
        data=>{
          this.listes=data;
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
        },
        err=>{
          console.log("erreur de reseau");
        }
      )
    }



    if(this.affichage=="evenement"){
      this.service.getImage("evenements").subscribe(
        data=>{
          this.listeImage=data;
        },
        err=>{
          console.log("probleme de reseau");
        }
      )
    }
  }



  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }



  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post(this.host+'upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            //this.message = 'Image uploaded successfully';
            this.router.navigateByUrl('administration/evenement');
          } else {
            // this.message = 'Image not uploaded successfully';
          }
        }
      );
   // location.reload();

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

  supprimerPhoto(id: any) {
    this.service.supprimerPhoto("evenements", id).subscribe(
      data=>{console.log("photo supprimée avec succé")},
      err=>{console.log("probleme de reseau")}
    )
  }

  supprimerEntreprise(id: any) {
    this.service.supprimerEntreprise("entreprises", id).subscribe(
      data=>{console.log("Entreprise supprimée avec succé")},
      err=>{console.log("probleme de reseau")}
    )
  }

  supprimerEtudiant(id: any) {
    this.service.supprimerEtudiant("etudiants", id).subscribe(
      data=>{console.log("Etudiant supprimé avec succé")},
      err=>{console.log("probleme de reseau")}
    )
  }
}
