import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../../services/service.service';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  admin:any;
  constructor(private router: Router, private service:ServiceService) { }

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
}
