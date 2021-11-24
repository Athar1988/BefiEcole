import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsRoutingModule } from './apps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppsComponent } from './apps.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { ServiceblogService } from './blog/blog-service.service';
import { RelayOnComponent } from './about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './about/About-Components/top-content/top-content.component';
import { FullComponent } from './layout/full/full.component';
import { BannerComponent } from './shared/banner/banner.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { QuinousComponent } from './about/About-Components/Institut/quinous/quinous.component';
import { LavieComponent } from './about/About-Components/Institut/lavie/lavie.component';
import { StageComponent } from './about/About-Components/Institut/stage/stage.component';
import { GalerieComponent } from './about/About-Components/Institut/galerie/galerie.component';
import { InscriEntrepriseComponent } from './about/About-Components/Institut/inscri-entreprise/inscri-entreprise.component';
import { MultimediaComponent } from './blog/formation/multimedia/multimedia.component';
import { ReseauComponent } from './blog/formation/reseau/reseau.component';
import { GestionComponent } from './blog/formation/gestion/gestion.component';
import { MarketingComponent } from './blog/formation/marketing/marketing.component';
import { CommunicationComponent } from './blog/formation/communication/communication.component';
import { DirectionComponent } from './blog/formation/direction/direction.component';
import { FinanceComponent } from './blog/formation/finance/finance.component';
import { EngageComponent } from './about/About-Components/Institut/engage/engage.component';
import { SolutionsComponent } from './about/About-Components/Institut/solutions/solutions.component';
import { PedagogieComponent } from './about/About-Components/Institut/pedagogie/pedagogie.component';
import { PartenairesComponent } from './about/About-Components/Institut/partenaires/partenaires.component';

@NgModule({
  declarations: [
    AppsComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
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
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ServiceblogService],
})
export class AppsModule {}
