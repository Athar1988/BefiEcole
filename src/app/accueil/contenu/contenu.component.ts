import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServiceblogService} from '../../apps/blog/blog-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {


  imagePath='../assets/images/blog/ecole.jpg';
  relayOn = [
    {
      icon: 'sl-icon-globe text-info-gradiant',
      field: 'La vie à l’IFT ',
      fieldText: 'Importante dans la construction de son projet professionnel et dans son épanouissement personnel.',
      lien: 'lavie',
    },
    {
      icon: 'sl-icon-briefcase text-info-gradiant',
      field: 'Stage & emploi',
      fieldText: 'Augmenter l’employabilité des diplômés et réduire les délais d’intégration sur le marché du travail.',
      lien: 'stage',
    },
    {
      icon: ' sl-icon-camera  text-info-gradiant',
      field: 'Galerie images',
      fieldText: 'Galerie de nos activités: Clubs, Voyages, Sorties, Evénements, Vacances, Sports, Jeux ludiques, Cérémonies...',
      lien: 'galerie',
    }
  ];
  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient
  ) {
    this.service.showEdit = false;
  }

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));
  }


  viewDetail(lien: string, id: number) {
    this.service.detailId = id;
    if (this.service.loginStatusService) this.service.showEdit = true;
    this.router.navigate([lien, id]);
  }
}
