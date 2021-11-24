import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quinous',
  templateUrl: './quinous.component.html',
  styleUrls: ['./quinous.component.css']
})
export class QuinousComponent implements OnInit {
  imagePath='../assets/images/innerpage/qui-sommes.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
