import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/models/character';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() data!: Character;
  @Input() onCompare: boolean = false;
  @Output() onSelect = new EventEmitter<number>();
  randomEpisode!: string;

  constructor(
    private service: ApiService
  ) {}

  ngOnInit(): void {
    const random = Math.floor(Math.random()* this.data.episode.length);
    this.service.getData(this.data.episode[random]).subscribe((res)=>{
      this.randomEpisode = res.name;
    })
  }
}
