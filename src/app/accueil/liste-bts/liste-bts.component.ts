import { Component, OnInit } from '@angular/core';
import {Blog} from '../../apps/blog/blog-type';
import {ServiceService} from '../../apps/services/service.service';

@Component({
  selector: 'app-liste-bts',
  templateUrl: './liste-bts.component.html',
  styleUrls: ['./liste-bts.component.css']
})
export class ListeBTSComponent implements OnInit {

  constructor( public serviceService: ServiceService,) { }

  blogs: Blog[] =this.serviceService.blogs;

  ngOnInit(): void {
    if (this.serviceService.Blogs.length === 0)
      this.serviceService.getBlog().subscribe((d: any) => (this.serviceService.Blogs = d));
  }


  viewDetail(lien: string, id: number) {
    this.serviceService.viewDetail(lien, id);
  }
}
