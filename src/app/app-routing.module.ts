import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BtpmultimediaComponent} from './apps/blog/formationbtp/btpmultimedia/btpmultimedia.component';
import {ErrorComponent} from './admin/error/error.component';
import {MultimediaComponent} from './apps/blog/formation/multimedia/multimedia.component';
import {QuinousComponent} from './apps/blog/institut/quinous/quinous.component';
import {CommerceComponent} from './apps/blog/formation/commerce/commerce.component';

import {EngageComponent} from './apps/blog/institut/engage/engage.component';
import {InscriptionEtudiantComponent} from './apps/blog/institut/inscription-etudiant/inscription-etudiant.component';
import {SolutionsComponent} from './apps/blog/institut/solutions/solutions.component';
import {PedagogieComponent} from './apps/blog/institut/pedagogie/pedagogie.component';
import {BtpCommerceComponent} from './apps/blog/formationbtp/btp-commerce/btp-commerce.component';
import {BtpComptableComponent} from './apps/blog/formationbtp/btp-comptable/btp-comptable.component';
import {ReseauComponent} from './apps/blog/formation/reseau/reseau.component';
import {MarketingComponent} from './apps/blog/formation/marketing/marketing.component';
import {LavieComponent} from './apps/blog/institut/lavie/lavie.component';
import {GalerieComponent} from './apps/blog/institut/galerie/galerie.component';
import {DirectionComponent} from './apps/blog/formation/direction/direction.component';
import {BtpventeComponent} from './apps/blog/formationbtp/btpvente/btpvente.component';
import {PartenairesComponent} from './apps/blog/institut/partenaires/partenaires.component';
import {BtpgestionComponent} from './apps/blog/formationbtp/btpgestion/btpgestion.component';
import {AdminInscriptionComponent} from './admin/admin-inscription/admin-inscription.component';
import {BtpPatisserieComponent} from './apps/blog/formationbtp/btp-patisserie/btp-patisserie.component';
import {InscriEntrepriseComponent} from './apps/blog/institut/inscri-entreprise/inscri-entreprise.component';
import {FinanceComponent} from './apps/blog/formation/finance/finance.component';
import {CommunicationComponent} from './apps/blog/formation/communication/communication.component';
import {BtpInfographieComponent} from './apps/blog/formationbtp/btp-infographie/btp-infographie.component';
import {AjouteEvenementComponent} from './admin/ajoute-evenement/ajoute-evenement.component';
import {AuthGuradGuard} from './auth-gurad.guard';
import {GestionComponent} from './apps/blog/formation/gestion/gestion.component';
import {BtpdouanieresComponent} from './apps/blog/formationbtp/btpdouanieres/btpdouanieres.component';
import {ContenuComponent} from './accueil/contenu/contenu.component';
import {ContactComponent} from './accueil/contact/contact.component';
import {StageComponent} from './apps/blog/institut/stage/stage.component';



const routes: Routes = [

      { path: '', component: ContenuComponent },
      { path: 'commerce/:id', component: CommerceComponent },
      { path: 'multimédia/:id', component: MultimediaComponent },
      { path: 'reseau/:id', component: ReseauComponent },
      { path: 'gestion/:id', component: GestionComponent },
      { path: 'marketing/:id', component: MarketingComponent },
      { path: 'Communication/:id', component: CommunicationComponent },
      { path: 'direction/:id', component: DirectionComponent },
      { path: 'finance/:id', component: FinanceComponent },

      { path: 'administration/:id', canActivate: [AuthGuradGuard], component: AjouteEvenementComponent },
      { path: 'admin', component: AdminInscriptionComponent },

      { path: 'ventebtp', component: BtpventeComponent },
      { path: 'gestionbtp', component: BtpgestionComponent },
      { path: 'comptablebtp', component: BtpComptableComponent },
      { path: 'commercebtp', component: BtpCommerceComponent },
      { path: 'infographiebtp', component: BtpInfographieComponent },
      { path: 'multimediabtp', component: BtpmultimediaComponent },
      { path: 'douanieresbtp', component: BtpdouanieresComponent },
      { path: 'patisseriebtp', component: BtpPatisserieComponent },

      { path: 'about', component: ContactComponent },
      { path: 'about/:id', component: ContactComponent },

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

      { path: '**', component: ErrorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
