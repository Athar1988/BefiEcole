import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { blogs } from './blog-data';


@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  Blogs: any[] = [];
  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;


  constructor(public http: HttpClient) {
  }

  public getBlog(): Observable<any> {
    return of(blogs);
  }


}
