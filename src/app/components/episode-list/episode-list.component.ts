import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { Episode } from 'src/models/episode';
import { ApiService } from 'src/service/api.service';
import { EpSettings } from './epListSetting';

@Component({
  selector: 'app-episode-list',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit, OnChanges {
  @Input() data!: Episode[];
  settings = EpSettings;
  source = new LocalDataSource()

  constructor(
    private service: ApiService, 
    private router: Router
    ) {}

  ngOnInit(): void {
    this.service.episodeList ? this.data = this.service.episodeList : this.data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue){
      this.source = new LocalDataSource(this.data)
      this.source.refresh()
    }
  }

  getDetails(episode: any): void {
    let data = this.data.find(i => i.name === episode.name)
    this.service.episodeList = this.data
    this.service.cast = data!.characters
    this.service.episode = data!
    this.router.navigate(['/episode']);
  }
}
