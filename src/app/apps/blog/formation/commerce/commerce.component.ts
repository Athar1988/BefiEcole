import { Component, OnInit } from '@angular/core';
import {Blog} from '../../blog-type';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../../../services/service.service';

@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.css']
})
export class CommerceComponent implements OnInit {


  id: any;
  blogDetail: Blog | null = null;

  constructor(activatedRouter: ActivatedRoute,
              public router: Router,
              public serviceService: ServiceService) {
    this.id = activatedRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.blogDetail = this.serviceService.Blogs.filter(x => x.id === +this.id)[0];

  }


}
