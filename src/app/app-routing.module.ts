import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/template/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/template/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/template/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/template/home-four/home-four.component';
import { HomeFiveComponent } from './components/pages/template/home-five/home-five.component';
import { HomeSixComponent } from './components/pages/template/home-six/home-six.component';
import { HomeSevenComponent } from './components/pages/home/home.component';
import { HomeEightComponent } from './components/pages/template/home-eight/home-eight.component';
import { HomeNineComponent } from './components/pages/template/home-nine/home-nine.component';
import { HomeTenComponent } from './components/pages/template/home-ten/home-ten.component';
import { HomeElevenComponent } from './components/pages/template/home-eleven/home-eleven.component';
import { HomeTwelveComponent } from './components/pages/template/home-twelve/home-twelve.component';
import { HomeThirteenComponent } from './components/pages/template/home-thirteen/home-thirteen.component';
import { HomeFourteenComponent } from './components/pages/template/home-fourteen/home-fourteen.component';
import { HomeFifteenComponent } from './components/pages/template/home-fifteen/home-fifteen.component';
import { HomeSixteenComponent } from './components/pages/template/home-sixteen/home-sixteen.component';
import { HomeSeventeenComponent } from './components/pages/template/home-seventeen/home-seventeen.component';
import { HomeEighteenComponent } from './components/pages/template/home-eighteen/home-eighteen.component';
import { HomeNineteenComponent } from './components/pages/template/home-nineteen/home-nineteen.component';
import { HomeTwentyComponent } from './components/pages/template/home-twenty/home-twenty.component';
import { HomeTwentyOneComponent } from './components/pages/template/home-twenty-one/home-twenty-one.component';
import { HomeTwentyTwoComponent } from './components/pages/template/home-twenty-two/home-twenty-two.component';
import { HomeTwentyThreeComponent } from './components/pages/template/home-twenty-three/home-twenty-three.component';
import { HomeTwentyFourComponent } from './components/pages/template/home-twenty-four/home-twenty-four.component';
import { HomeTwentyFiveComponent } from './components/pages/template/home-twenty-five/home-twenty-five.component';
import { HomeTwentySixComponent } from './components/pages/template/home-twenty-six/home-twenty-six.component';
import { HomeTwentySevenComponent } from './components/pages/template/home-twenty-seven/home-twenty-seven.component';
import { HomeTwentyEightComponent } from './components/pages/template/home-twenty-eight/home-twenty-eight.component';
import { HomeTwentyNineComponent } from './components/pages/template/home-twenty-nine/home-twenty-nine.component';
import { HomeThirtyComponent } from './components/pages/template/home-thirty/home-thirty.component';
import { HomeThirtyOneComponent } from './components/pages/template/home-thirty-one/home-thirty-one.component';
import { HomeThirtyTwoComponent } from './components/pages/template/home-thirty-two/home-thirty-two.component';
import { HomeThirtyThreeComponent } from './components/pages/template/home-thirty-three/home-thirty-three.component';
import { HomeThirtyFourComponent } from './components/pages/template/home-thirty-four/home-thirty-four.component';
import { HomeThirtyFiveComponent } from './components/pages/template/home-thirty-five/home-thirty-five.component';
import { HomeThirtySixComponent } from './components/pages/template/home-thirty-six/home-thirty-six.component';
import { HomeThirtySevenComponent } from './components/pages/template/home-thirty-seven/home-thirty-seven.component';
import { HomeThirtyEightComponent } from './components/pages/template/home-thirty-eight/home-thirty-eight.component';
import { HomeThirtyNineComponent } from './components/pages/template/home-thirty-nine/home-thirty-nine.component';
import { HomeFortyComponent } from './components/pages/template/home-forty/home-forty.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { WorksDetailsComponent } from './components/pages/works-details/works-details.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { BaseDeDonneesComponent } from './components/pages/competences/base-de-donnees/bdd.component';
import { CommunicationComponent } from './components/pages/competences/communication/communication.component';
import { DocUtilisateurComponent } from './components/pages/competences/doc-utilisateur/doc-utilisateur.component';
import { EspritEquipeComponent } from './components/pages/competences/esprit-equipe/esprit-equipe.component';
import { FrameworkComponent } from './components/pages/competences/framework/framework.component';
import { GestionTempsComponent } from './components/pages/competences/gestion-temps/gestion-temps.component';
import { GitComponent } from './components/pages/competences/git/git.component';
import { PhpComponent } from './components/pages/competences/php/php.component';
import { ReunionComponent } from './components/pages/competences/reunion/reunion.component';
import { SitesWebComponent } from './components/pages/competences/sites-web/sites-web.component';
import { ComptageBtobComponent } from './components/pages/realisations/comptage-btob/comptage-btob.component';
import { BudJetComponent } from './components/pages/realisations/bud-jet/bud-jet.component';
import { EPopComponent } from './components/pages/realisations/e-pop/e-pop.component';
import { FastComponent } from './components/pages/realisations/fast/fast.component';
import { MaestroComponent } from './components/pages/realisations/maestro/maestro.component';

const routes: Routes = [
    {path: 'home', component: HomeSevenComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'home-three', component: HomeThreeComponent},
    {path: 'home-four', component: HomeFourComponent},
    {path: 'home-five', component: HomeFiveComponent},
    {path: 'home-six', component: HomeSixComponent},
    {path: 'home-seven', component: HomeSevenComponent},
    {path: 'home-eight', component: HomeEightComponent},
    {path: 'home-nine', component: HomeNineComponent},
    {path: 'home-ten', component: HomeTenComponent},
    {path: 'home-eleven', component: HomeElevenComponent},
    {path: 'home-twelve', component: HomeTwelveComponent},
    {path: 'home-thirteen', component: HomeThirteenComponent},
    {path: 'home-fourteen', component: HomeFourteenComponent},
    {path: 'home-fifteen', component: HomeFifteenComponent},
    {path: 'home-sixteen', component: HomeSixteenComponent},
    {path: 'home-seventeen', component: HomeSeventeenComponent},
    {path: 'home-eighteen', component: HomeEighteenComponent},
    {path: 'home-nineteen', component: HomeNineteenComponent},
    {path: 'home-twenty', component: HomeTwentyComponent},
    {path: 'home-twenty-one', component: HomeTwentyOneComponent},
    {path: 'home-twenty-two', component: HomeTwentyTwoComponent},
    {path: 'home-twenty-three', component: HomeTwentyThreeComponent},
    {path: 'home-twenty-four', component: HomeTwentyFourComponent},
    {path: 'home-twenty-five', component: HomeTwentyFiveComponent},
    {path: 'home-twenty-six', component: HomeTwentySixComponent},
    {path: 'home-twenty-seven', component: HomeTwentySevenComponent},
    {path: 'home-twenty-eight', component: HomeTwentyEightComponent},
    {path: 'home-twenty-nine', component: HomeTwentyNineComponent},
    {path: 'home-thirty', component: HomeThirtyComponent},
    {path: 'home-thirty-one', component: HomeThirtyOneComponent},
    {path: 'home-thirty-two', component: HomeThirtyTwoComponent},
    {path: 'home-thirty-three', component: HomeThirtyThreeComponent},
    {path: 'home-thirty-four', component: HomeThirtyFourComponent},
    {path: 'home-thirty-five', component: HomeThirtyFiveComponent},
    {path: 'home-thirty-six', component: HomeThirtySixComponent},
    {path: 'home-thirty-seven', component: HomeThirtySevenComponent},
    {path: 'home-thirty-eight', component: HomeThirtyEightComponent},
    {path: 'home-thirty-nine', component: HomeThirtyNineComponent},
    {path: 'home-forty', component: HomeFortyComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'works-details', component: WorksDetailsComponent},
    {path: 'blog-details', component: BlogDetailsComponent},
    //Competences
    {path: 'competences/base-de-donnees', component: BaseDeDonneesComponent},
    {path: 'competences/communication', component: CommunicationComponent},
    {path: 'competences/doc-utilisateur', component: DocUtilisateurComponent},
    {path: 'competences/esprit-equipe', component: EspritEquipeComponent},
    {path: 'competences/framework', component: FrameworkComponent},
    {path: 'competences/gestion-temps', component: GestionTempsComponent},
    {path: 'competences/git', component: GitComponent},
    {path: 'competences/php', component: PhpComponent},
    {path: 'competences/reunion', component: ReunionComponent},
    {path: 'competences/sites-web', component: SitesWebComponent},
    //Realisations
    {path: 'realisations/comptage-btob', component: ComptageBtobComponent},
    {path: 'realisations/bud-jet', component: BudJetComponent},
    {path: 'realisations/e-pop', component: EPopComponent},
    {path: 'realisations/fast', component: FastComponent},
    {path: 'realisations/maestro', component: MaestroComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }