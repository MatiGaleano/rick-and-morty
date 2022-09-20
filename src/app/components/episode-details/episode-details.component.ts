import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Episode } from 'src/models/episode';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.scss']
})
export class EpisodeDetailsComponent implements OnInit {
  data!: Episode;
  cast: string[] = [];

  constructor(
    private service: ApiService,
    private _location: Location
  ) {
  }

  ngOnInit(): void {
    this.getData();
    this.service.refreshEpisode.subscribe(() => {
      this.getData();
    });
  }

  getData(): void {
    this.cast = this.service.cast
    this.data = this.service.episode    
  }

  return(){
    this._location.back()
  }

}
