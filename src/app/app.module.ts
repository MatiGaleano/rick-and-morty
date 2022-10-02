import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';
import { EpisodeCastComponent } from './components/episode-cast/episode-cast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { HomeComponent } from './components/home/home.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    EpisodeDetailsComponent,
    EpisodeCastComponent,
    HeaderComponent,
    FooterComponent,
    EpisodeListComponent,
    LocationListComponent,
    LocationDetailsComponent,
    HomeComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SmartTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
