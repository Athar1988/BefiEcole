import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommerceComponent } from './apps/blog/formation/commerce/commerce.component';
import {NgxCaptchaModule} from 'ngx-captcha';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {AgmCoreModule} from '@agm/core';
import { AjouteEvenementComponent } from './admin/ajoute-evenement/ajoute-evenement.component';
import { AdminInscriptionComponent } from './admin/admin-inscription/admin-inscription.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CommerceComponent,
    AjouteEvenementComponent,
    AdminInscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBi2q2VvTL9wJ2F9pp6ejqTO81Nh_G8oy8',
      libraries: ['places']
    }),
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
