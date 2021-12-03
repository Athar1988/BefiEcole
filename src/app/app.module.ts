import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommerceComponent } from './apps/blog/formation/commerce/commerce.component';
import { environment } from '../environments/environment';
import {NgxCaptchaModule} from 'ngx-captcha';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    CommerceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBi2q2VvTL9wJ2F9pp6ejqTO81Nh_G8oy8'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
