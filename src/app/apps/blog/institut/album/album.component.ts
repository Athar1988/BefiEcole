import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../../services/service.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  admin:any;
  listeImage:any;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.admin=localStorage.getItem('admin');
    this.service.getImage("evenements").subscribe(
      data=>{
        this.listeImage=data;
      },
      err=>{
        console.log("probleme de reseau");
      }
    )
  }




  supprimerPhoto(id: any) {
    this.service.supprimerPhoto("evenements", id).subscribe(
      data=>{console.log("photo supprimée avec succé")},
      err=>{console.log("probleme de reseau")}
    )
  }


}
