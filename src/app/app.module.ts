import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
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
import { HomeFortyComponent } from './components/pages/template/home-forty/home-forty.component';
import { HomeThirtyOneComponent } from './components/pages/template/home-thirty-one/home-thirty-one.component';
import { HomeThirtyTwoComponent } from './components/pages/template/home-thirty-two/home-thirty-two.component';
import { HomeThirtyThreeComponent } from './components/pages/template/home-thirty-three/home-thirty-three.component';
import { HomeThirtyFourComponent } from './components/pages/template/home-thirty-four/home-thirty-four.component';
import { HomeThirtyFiveComponent } from './components/pages/template/home-thirty-five/home-thirty-five.component';
import { HomeThirtySixComponent } from './components/pages/template/home-thirty-six/home-thirty-six.component';
import { HomeThirtySevenComponent } from './components/pages/template/home-thirty-seven/home-thirty-seven.component';
import { HomeThirtyEightComponent } from './components/pages/template/home-thirty-eight/home-thirty-eight.component';
import { HomeThirtyNineComponent } from './components/pages/template/home-thirty-nine/home-thirty-nine.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { WorksDetailsComponent } from './components/pages/works-details/works-details.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { DemoSidebarComponent } from './components/layouts/demo-sidebar/demo-sidebar.component';
import { BaseDeDonneesComponent } from './components/pages/competences/base-de-donnees/bdd.component';
import { FrameworkComponent } from './components/pages/competences/framework/framework.component';
import { PhpComponent } from './components/pages/competences/php/php.component';
import { SitesWebComponent } from './components/pages/competences/sites-web/sites-web.component';
import { GitComponent } from './components/pages/competences/git/git.component';
import { EspritEquipeComponent } from './components/pages/competences/esprit-equipe/esprit-equipe.component';
import { GestionTempsComponent } from './components/pages/competences/gestion-temps/gestion-temps.component';
import { DocUtilisateurComponent } from './components/pages/competences/doc-utilisateur/doc-utilisateur.component';
import { CommunicationComponent } from './components/pages/competences/communication/communication.component';
import { ReunionComponent } from './components/pages/competences/reunion/reunion.component';
import { ComptageBtobComponent } from './components/pages/realisations/comptage-btob/comptage-btob.component';
import { EPopComponent } from './components/pages/realisations/e-pop/e-pop.component';
import { BudJetComponent } from './components/pages/realisations/bud-jet/bud-jet.component';
import { FastComponent } from './components/pages/realisations/fast/fast.component';
import { MaestroComponent } from './components/pages/realisations/maestro/maestro.component';

@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
        HomeOneComponent,
        HomeTwoComponent,
        HomeThreeComponent,
        HomeFourComponent,
        HomeFiveComponent,
        HomeSixComponent,
        HomeSevenComponent,
        HomeEightComponent,
        HomeNineComponent,
        HomeTenComponent,
        HomeElevenComponent,
        HomeTwelveComponent,
        HomeThirteenComponent,
        HomeFourteenComponent,
        HomeFifteenComponent,
        HomeSixteenComponent,
        HomeSeventeenComponent,
        HomeEighteenComponent,
        HomeNineteenComponent,
        HomeTwentyComponent,
        HomeTwentyOneComponent,
        HomeTwentyTwoComponent,
        HomeTwentyThreeComponent,
        HomeTwentyFourComponent,
        HomeTwentyFiveComponent,
        HomeTwentySixComponent,
        HomeTwentySevenComponent,
        HomeTwentyEightComponent,
        HomeTwentyNineComponent,
        HomeThirtyComponent,
        HomeFortyComponent,
        HomeThirtyOneComponent,
        HomeThirtyTwoComponent,
        HomeThirtyThreeComponent,
        HomeThirtyFourComponent,
        HomeThirtyFiveComponent,
        HomeThirtySixComponent,
        HomeThirtySevenComponent,
        HomeThirtyEightComponent,
        HomeThirtyNineComponent,
        BlogDetailsComponent,
        WorksDetailsComponent,
        ServicesDetailsComponent,
        DemoSidebarComponent,
        BaseDeDonneesComponent,
        FrameworkComponent,
        PhpComponent,
        SitesWebComponent,
        GitComponent,
        EspritEquipeComponent,
        GestionTempsComponent,
        DocUtilisateurComponent,
        CommunicationComponent,
        ReunionComponent,
        ComptageBtobComponent,
        EPopComponent,
        BudJetComponent,
        FastComponent,
        MaestroComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTooltipModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
