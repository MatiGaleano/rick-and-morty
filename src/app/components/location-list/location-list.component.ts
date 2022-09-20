import { Component, Input, OnInit } from '@angular/core';
import { Location } from 'src/models/location';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
  @Input() data!: Location;

  constructor() { }

  ngOnInit(): void {
  }

}
