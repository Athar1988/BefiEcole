import { Injectable } from '@angular/core';
import {Contact} from '../Modele/Contact';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entreprise} from '../Modele/Entreprise';
import {Etudiant} from '../Modele/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //host='https://befi.herokuapp.com/';
  host='http://localhost:8080/';
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

}
