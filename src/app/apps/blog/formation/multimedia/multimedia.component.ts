import { Component, OnInit } from '@angular/core';
import {Blog} from '../../blog-type';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../../services/service.service';

@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {


  id: any;
  blogDetail: Blog | null = null;

  constructor(activatedRouter: ActivatedRoute, public router: Router, private service:ServiceService) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];

  }

  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.service.showEdit=false;
    this.router.navigate([('/post')]);

  }

  editPost() {
    this.service.showEdit=false;
    this.router.navigate([('/editPost'), this.blogDetail?.id]);
  }

  // editPost(){
  //   this.router.navigate([('/editPost'), this.service?.detailId]);

  // }

}
