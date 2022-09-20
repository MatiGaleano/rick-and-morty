import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Episode } from 'src/models/episode';
import { ApiService } from 'src/service/api.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {
  @Input() data!: Episode;

  constructor(
    private service: ApiService, 
    private router: Router
    ) {}

  ngOnInit(): void {
    this.service.episode ? this.data = this.service.episode : this.data;
  }

  getDetails(): void {
    this.service.cast = this.data.characters
    this.service.episode = this.data
    this.router.navigate(['/episode']);
  }
}
