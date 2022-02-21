import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../apps/services/service.service';
import {Router} from '@angular/router';
import {Blog} from '../../apps/blog/blog-type';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  admin:any;
  constructor(private router: Router, private service:ServiceService) { }


  blogs: Blog[] =this.service.blogs;

  ngOnInit(): void {
    this.admin=localStorage.getItem('admin');
  }

  quinous(id: string) {
    this.router.navigate([id]);
  }

  formation(formation: string) {
    this.router.navigate([formation]);
  }

  logout() {
    this.service.logout();
    this.router.navigate(['admin']);
  }

  Administration() {
    this.router.navigate(['administration/entreprise']);
  }


  viewDetail(lien: string, id: number) {
    this.service.viewDetail(lien, id);
  }
}
