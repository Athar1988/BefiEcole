import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lavie',
  templateUrl: './lavie.component.html',
  styleUrls: ['./lavie.component.css']
})
export class LavieComponent implements OnInit {
  imagePath='../assets/images/innerpage/lavie.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
