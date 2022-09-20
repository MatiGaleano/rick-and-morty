import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes =[ 
{ path: 'home', component: HomeComponent },
// { path: 'compare', component: CharacterCompareComponent },
{ path: 'episode', component: EpisodeDetailsComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
