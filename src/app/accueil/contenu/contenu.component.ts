import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Blog} from '../../apps/blog/blog-type';
import {ServiceService} from '../../apps/services/service.service';

@Component({
  selector: 'app-contenu',
  templateUrl: './contenu.component.html',
  styleUrls: ['./contenu.component.css']
})
export class ContenuComponent implements OnInit {


  imagePath='../assets/images/blog/ecole1.jpg';
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
    public serviceService: ServiceService,
    public router: Router,
    public http: HttpClient
  ) {
    this.serviceService.showEdit = false;
  }


  blogs: Blog[] =this.serviceService.blogs;

    ngOnInit(): void {
    if (this.serviceService.Blogs.length === 0)
      this.serviceService.getBlog().subscribe((d: any) => (this.serviceService.Blogs = d));
  }


  viewDetail(lien: string, id: number) {
    this.serviceService.viewDetail(lien, id);
  }
}
