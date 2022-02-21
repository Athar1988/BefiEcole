import { Injectable } from '@angular/core';
import {Contact} from '../Modele/Contact';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Entreprise} from '../Modele/Entreprise';
import {Etudiant} from '../Modele/Etudiant';
import {Blog} from '../blog/blog-type';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  host='https://befi.herokuapp.com/';
  //host='http://localhost:8080/';



  blogs: Blog[] = [
    {
      id: 1,
      image: 'assets/images/blog/101.jpg',
      titre:
        'BTS Commerce International',
      description: 'La formation en BTS international permet d’initier les stagiaires aux techniques de commercialisation (import et export), de la vente, de la négociation, de la communication que ce soit à l’échelle nationale ou internationale.',
      Lien:'commerce/',
      icon:"fa fa-shopping-cart",
    },
    {
      id: 2,
      image: 'assets/images/blog/202.jpg',
      titre: 'BTS Multimédia',
      description: 'La formation en BTS Multimédia permet d’apprendre aux stagiaires la mise en œuvre, la réalisation et l’exploitation d’un site web. A terme le technicien peut évoluer vers des fonctions de chef de projet.',
      Lien: 'multimédia/',
      icon:'fa fa-caret-square-o-right',
    },
    {
      id: 3,
      image: 'assets/images/blog/303.jpg',
      titre:
        'BTS réseaux informatiques',
      description: 'Le technicien en Réseaux Informatiques est capable de traiter, gérer et concevoir un système réseau fiable et performant au sein de l’Entreprise.',
      Lien:
        'reseau/',
      icon:'fa fa-code-fork',
    },
    {
      id: 4,
      image: 'assets/images/blog/404.jpg',
      titre:
        'BTS Informatique de gestion',
      description: 'Le cursus en BTS Informatique de Gestion permet de former les stagiaires aux fonctions administratives (classement,…),Techniques (installation composante, sécurité, gestion de la panne, programmation  dans divers langages, diagnostic des anomalies…). Il permet à  l’apprenant de savoir gérer le parc informatique.',
      Lien:
        'gestion/',
      icon:'fa fa-cog',
    },
    {
      id: 5,
      image: 'assets/images/blog/505.jpg',
      titre:
        'BTS Marketing',
      description: 'Le technicien en Marketing peut élaborer un plan commercial Marketing, a des compétences pour  vendre, convaincre et négocier',
      Lien:
        'marketing/',
      icon:'fa fa-bullhorn',
    },
    {
      id: 6,
      image: 'assets/images/blog/707.jpg',
      titre:
        'BTS Infographie et Communication',
      description: 'Conditions d’admission: Etre titulaire du Baccalauréat ou équivalent de 13 ans d’études réussis.',
      Lien:
        'Communication/',
      icon:'fa fa-comments',
    },
    {
      id: 7,
      image: 'assets/images/blog/808.jpg',
      titre:
        'BTS Assistant(e) de Direction',
      description: 'Le technicien en Assistant de direction sera capable de classer documents, gérer les tâches au quotidien (courrier, réclamation, accueil, information, réunion,) et gérer le planning du direction. ',
      Lien:
        'direction/',
      icon:'fa fa-map-signs',
    },
    {
      id: 8,
      image: 'assets/images/blog/909.jpg',
      titre:
        'Technicien Supérieur en comptabilité et finance',
      description: 'La formation en BTS comptabilité finance permet à l’apprenant de savoir gérer la comptabilité au sein de l’Entreprise (gérer des fichiers, gérer la documentation, traîte facturation, suivi des comptes, élaborer les déclarations fiscales, paye, stock…).',
      Lien:
        'finance/',
      icon:'fa fa-money'
    },
  ];
  constructor(private router: Router, private http: HttpClient) { }


  enregistrerContact(contact:Contact): Observable<Contact> {
    return this.http.post<Contact>(this.host+"contacts",contact);
  }

  enregistrerEntreprise(entreprise:Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.host+"entreprises",entreprise);
  }

  enregistrerEtudiant(etudiant: Etudiant) : Observable<Etudiant>{
    return this.http.post<Etudiant>(this.host+"etudiants",etudiant);
  }

  logout(): void {
    localStorage.removeItem('admin');
  }

  recupererLogin() {
    return this.http.get(this.host+'logins');
  }

  get(url:any){
    return this.http.get(this.host+url);
  }

  getImage(url:any){
    return this.http.get(this.host+url);
  }

  supprimerPhoto(url: string, id: any) {
    return this.http.delete(this.host+url+"/"+id);
  }

  supprimerEntreprise(url: string, id: any) {
    return this.http.delete(this.host+url+"/"+id);
  }

  supprimerEtudiant(url: string, id: any) {
    return this.http.delete(this.host+url+"/"+id);
  }

  AdminAuthenticated(): boolean {
    return !!localStorage.getItem('admin');
  }

  viewDetail(lien: string, id: number) {
    this.detailId = id;
    if (this.loginStatusService) this.showEdit = true;
    this.router.navigate([lien, id]);
  }



  Blogs: any[] = [];
  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;



  public getBlog(): Observable<any> {
    return of(this.blogs);
  }


}
