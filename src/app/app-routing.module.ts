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
import { JavaComponent } from './components/pages/competences/java/java.component';
import { GestionProjetComponent } from './components/pages/competences/gestion_projet/gestionProjet.component';
import { GestionEvenementComponent } from './components/pages/competences/gestion-evenement/gestion-evenement.component';
import { TravailEquipeComponent } from './components/pages/competences/travail_equipe/travail-equipe.component';
import { CobolComponent } from './components/pages/competences/cobol/cobol.component';
import { AutonomieComponent } from './components/pages/competences/autonomie/autonomie.component';
import { GitComponent } from './components/pages/competences/git/git.component';
import { ReactNativeComponent } from './components/pages/competences/react_native/react-native.component';
import { VeilleComponent } from './components/pages/competences/veille/veille.component';
import { TenueCompteComponent } from './components/pages/realisations/tenue_compte/tenue-compte.component';
import { GecoComponent } from './components/pages/realisations/geco/geco.component';
import { BddComponent } from './components/pages/competences/bdd/bdd.component';
import { InovComponent } from './components/pages/realisations/inov/inov.component';
import { MatmoicaComponent } from './components/pages/realisations/matmoica/matmoica.component';
import { CinetechComponent } from './components/pages/realisations/cinetech/cinetech.component';

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
    {path: 'competences/java', component: JavaComponent},
    {path: 'competences/gestion-projet', component: GestionProjetComponent},
    {path: 'competences/gestion-evenement', component: GestionEvenementComponent},
    {path: 'competences/tavail-en-equipe', component: TravailEquipeComponent},
    {path: 'competences/cobol', component: CobolComponent},
    {path: 'competences/autonomie', component: AutonomieComponent},
    {path: 'competences/git', component: GitComponent},
    {path: 'competences/react-native', component: ReactNativeComponent},
    {path: 'competences/veille', component: VeilleComponent},
    {path: 'realisations/bdd', component: BddComponent},
    //Realisations
    {path: 'realisations/tenue-de-compte', component: TenueCompteComponent},
    {path: 'realisations/geco', component: GecoComponent},
    {path: 'realisations/inov', component: InovComponent},
    {path: 'realisations/mat-moi-ça', component: MatmoicaComponent},
    {path: 'realisations/cinetech', component: CinetechComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }