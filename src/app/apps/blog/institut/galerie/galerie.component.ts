import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../services/service.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {
  imagePath='../assets/images/innerpage/qui-sommes.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
