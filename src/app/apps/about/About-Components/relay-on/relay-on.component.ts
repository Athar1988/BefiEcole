import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
