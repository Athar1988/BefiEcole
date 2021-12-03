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
  host='https://befi.herokuapp.com/';

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

}
