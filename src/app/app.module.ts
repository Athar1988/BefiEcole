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
import {ErrorComponent} from './admin/error/error.component';
import { MenuComponent } from './accueil/menu/menu.component';
import {CommonModule} from '@angular/common';
import {BtpmultimediaComponent} from './apps/blog/formationbtp/btpmultimedia/btpmultimedia.component';
import {MultimediaComponent} from './apps/blog/formation/multimedia/multimedia.component';
import {QuinousComponent} from './apps/blog/institut/quinous/quinous.component';
import {EngageComponent} from './apps/blog/institut/engage/engage.component';
import {InscriptionEtudiantComponent} from './apps/blog/institut/inscription-etudiant/inscription-etudiant.component';
import {SolutionsComponent} from './apps/blog/institut/solutions/solutions.component';
import {PedagogieComponent} from './apps/blog/institut/pedagogie/pedagogie.component';
import {SurmesureComponent} from './apps/blog/formation/surmesure/surmesure.component';
import {BtpCommerceComponent} from './apps/blog/formationbtp/btp-commerce/btp-commerce.component';
import {BtpComptableComponent} from './apps/blog/formationbtp/btp-comptable/btp-comptable.component';
import {ReseauComponent} from './apps/blog/formation/reseau/reseau.component';
import {LavieComponent} from './apps/blog/institut/lavie/lavie.component';
import {MarketingComponent} from './apps/blog/formation/marketing/marketing.component';
import {GalerieComponent} from './apps/blog/institut/galerie/galerie.component';
import {DirectionComponent} from './apps/blog/formation/direction/direction.component';
import {BtpventeComponent} from './apps/blog/formationbtp/btpvente/btpvente.component';
import {PartenairesComponent} from './apps/blog/institut/partenaires/partenaires.component';
import {BtpgestionComponent} from './apps/blog/formationbtp/btpgestion/btpgestion.component';
import {BtpPatisserieComponent} from './apps/blog/formationbtp/btp-patisserie/btp-patisserie.component';
import {InscriEntrepriseComponent} from './apps/blog/institut/inscri-entreprise/inscri-entreprise.component';
import {FinanceComponent} from './apps/blog/formation/finance/finance.component';
import {FooterComponent} from './accueil/footer/footer.component';
import {CommunicationComponent} from './apps/blog/formation/communication/communication.component';
import {BtpInfographieComponent} from './apps/blog/formationbtp/btp-infographie/btp-infographie.component';
import {GestionComponent} from './apps/blog/formation/gestion/gestion.component';
import {BtpdouanieresComponent} from './apps/blog/formationbtp/btpdouanieres/btpdouanieres.component';
import { ContenuComponent } from './accueil/contenu/contenu.component';
import { ContactComponent } from './accueil/contact/contact.component';
import {StageComponent} from './apps/blog/institut/stage/stage.component';

@NgModule({
  declarations: [
    AppComponent,
    CommerceComponent,
    AjouteEvenementComponent,
    AdminInscriptionComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    QuinousComponent,
    LavieComponent,
    StageComponent,
    GalerieComponent,
    InscriEntrepriseComponent,
    MultimediaComponent,
    ReseauComponent,
    GestionComponent,
    MarketingComponent,
    CommunicationComponent,
    DirectionComponent,
    FinanceComponent,
    EngageComponent,
    SolutionsComponent,
    PedagogieComponent,
    PartenairesComponent,
    SurmesureComponent,
    BtpComptableComponent,
    BtpCommerceComponent,
    BtpInfographieComponent,
    BtpmultimediaComponent,
    BtpdouanieresComponent,
    BtpPatisserieComponent,
    BtpventeComponent,
    BtpgestionComponent,
    InscriptionEtudiantComponent,
    ContenuComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    NgxCaptchaModule,
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
