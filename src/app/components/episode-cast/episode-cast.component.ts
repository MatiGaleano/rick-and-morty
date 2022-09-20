import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/models/character';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-episode-cast',
  templateUrl: './episode-cast.component.html',
  styleUrls: ['./episode-cast.component.scss']
})
export class EpisodeCastComponent implements OnInit {
  @Input() url: string = '';
  data!: Character;

  constructor(
    private service: ApiService
  ) {
  }

  ngOnInit(): void {
    console.log(this.url)
    this.service.getData(this.url).subscribe((res)=>{
      this.data = res
    })
  }

}
