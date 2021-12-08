import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import {LavieComponent} from './about/About-Components/Institut/lavie/lavie.component';
import {StageComponent} from './about/About-Components/Institut/stage/stage.component';
import {GalerieComponent} from './about/About-Components/Institut/galerie/galerie.component';
import {QuinousComponent} from './about/About-Components/Institut/quinous/quinous.component';
import {InscriEntrepriseComponent} from './about/About-Components/Institut/inscri-entreprise/inscri-entreprise.component';
import {CommerceComponent} from './blog/formation/commerce/commerce.component';
import {CommunicationComponent} from './blog/formation/communication/communication.component';
import {DirectionComponent} from './blog/formation/direction/direction.component';
import {FinanceComponent} from './blog/formation/finance/finance.component';
import {GestionComponent} from './blog/formation/gestion/gestion.component';
import {MarketingComponent} from './blog/formation/marketing/marketing.component';
import {MultimediaComponent} from './blog/formation/multimedia/multimedia.component';
import {ReseauComponent} from './blog/formation/reseau/reseau.component';
import {EngageComponent} from './about/About-Components/Institut/engage/engage.component';
import {SolutionsComponent} from './about/About-Components/Institut/solutions/solutions.component';
import {PedagogieComponent} from './about/About-Components/Institut/pedagogie/pedagogie.component';
import {PartenairesComponent} from './about/About-Components/Institut/partenaires/partenaires.component';
import {SurmesureComponent} from './blog/formation/surmesure/surmesure.component';
import {BtpventeComponent} from './blog/formationbtp/btpvente/btpvente.component';
import {BtpgestionComponent} from './blog/formationbtp/btpgestion/btpgestion.component';
import {BtpComptableComponent} from './blog/formationbtp/btp-comptable/btp-comptable.component';
import {BtpCommerceComponent} from './blog/formationbtp/btp-commerce/btp-commerce.component';
import {BtpInfographieComponent} from './blog/formationbtp/btp-infographie/btp-infographie.component';
import {BtpmultimediaComponent} from './blog/formationbtp/btpmultimedia/btpmultimedia.component';
import {BtpdouanieresComponent} from './blog/formationbtp/btpdouanieres/btpdouanieres.component';
import {BtpPatisserieComponent} from './blog/formationbtp/btp-patisserie/btp-patisserie.component';
import {InscriptionEtudiantComponent} from './about/About-Components/Institut/inscription-etudiant/inscription-etudiant.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },

      { path: 'commerce/:id', component: CommerceComponent },
      { path: 'multimédia/:id', component: MultimediaComponent },
      { path: 'reseau/:id', component: ReseauComponent },
      { path: 'gestion/:id', component: GestionComponent },
      { path: 'marketing/:id', component: MarketingComponent },
      { path: 'Communication/:id', component: CommunicationComponent },
      { path: 'direction/:id', component: DirectionComponent },
      { path: 'finance/:id', component: FinanceComponent },


      { path: 'ventebtp', component: BtpventeComponent },
      { path: 'gestionbtp', component: BtpgestionComponent },
      { path: 'comptablebtp', component: BtpComptableComponent },
      { path: 'commercebtp', component: BtpCommerceComponent },
      { path: 'infographiebtp', component: BtpInfographieComponent },
      { path: 'multimediabtp', component: BtpmultimediaComponent },
      { path: 'douanieresbtp', component: BtpdouanieresComponent },
      { path: 'patisseriebtp', component: BtpPatisserieComponent },

      { path: 'about', component: AboutComponent },
      { path: 'about/:id', component: AboutComponent },


      { path: 'lavie', component: LavieComponent },
      { path: 'stage', component: StageComponent },
      { path: 'galerie', component: GalerieComponent },

      { path: 'quinous', component: QuinousComponent },
      { path: 'engage', component: EngageComponent },
      { path: 'solutions', component: SolutionsComponent },
      { path: 'pedagogie', component: PedagogieComponent },
      { path: 'partenaires', component: PartenairesComponent },


      { path: 'inscriptionEtudiant', component: InscriptionEtudiantComponent },
      { path: 'inscriptionEtudiant/:id', component: InscriptionEtudiantComponent },
      { path: 'inscrientreprise', component: InscriEntrepriseComponent },
      { path: 'inscrientreprise/:id', component: InscriEntrepriseComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
