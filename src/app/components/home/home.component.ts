import { Component, OnInit } from '@angular/core';
import { Character } from 'src/models/character';
import { Location } from 'src/models/location';
import { Episode } from 'src/models/episode';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  characterList: Character[] = [];
  locationList: Location[] = [];
  episodeList: Episode[] = [];
  resource: string = '';

  constructor(private service: ApiService) {}

  ngOnInit(): void {}

  onSearch(data: any) {
    let resource = data.resource;
    this.service.getDataList(data).subscribe((res) => {
      this.resource = resource;
      switch (resource) {
        case 'character':
          return (this.characterList = res.results);
        case 'episode':
          return (this.episodeList = res.results);
        case 'location':
          return (this.locationList = res.results);
        default:
          return console.log(res);
      };
    });
  }
}
