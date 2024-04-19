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
import {JavaComponent } from './components/pages/competences/java/java.component';
import { FrameworkComponent } from './components/pages/competences/framework/framework.component';
import { PhpComponent } from './components/pages/competences/php/php.component';
import { SitesWebComponent } from './components/pages/competences/sites-web/sites-web.component';
import { CobolComponent } from './components/pages/competences/cobol/cobol.component';
import { ReactNativeComponent } from './components/pages/competences/react_native/react-native.component';
import { GitComponent } from './components/pages/competences/git/git.component';
import { TravailEquipeComponent } from './components/pages/competences/travail_equipe/travail-equipe.component';
import { AutonomieComponent } from './components/pages/competences/autonomie/autonomie.component';
import { GestionEvenementComponent } from './components/pages/competences/gestion-evenement/gestion-evenement.component';
import { GestionProjetComponent } from './components/pages/competences/gestion_projet/gestionProjet.component';
import { VeilleComponent } from './components/pages/competences/veille/veille.component';
import { TenueCompteComponent } from './components/pages/realisations/tenue_compte/tenue-compte.component';
import { GecoComponent } from './components/pages/realisations/geco/geco.component';
import { BudJetComponent } from './components/pages/realisations/bud-jet/bud-jet.component';
import { InovComponent } from './components/pages/realisations/inov/inov.component';
import { BddComponent } from './components/pages/competences/bdd/bdd.component';
import { MatmoicaComponent } from './components/pages/realisations/matmoica/matmoica.component';
import { CinetechComponent } from './components/pages/realisations/cinetech/cinetech.component';

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
        JavaComponent,
        FrameworkComponent,
        PhpComponent,
        SitesWebComponent,
        CobolComponent,
        ReactNativeComponent,
        BddComponent,
        GitComponent,
        TravailEquipeComponent,
        AutonomieComponent,
        GestionEvenementComponent,
        GestionProjetComponent,
        VeilleComponent,
        TenueCompteComponent,
        GecoComponent,
        BudJetComponent,
        InovComponent,
        MatmoicaComponent,
        CinetechComponent
        
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
