import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from 'src/service/api.service';
import { Location } from 'src/models/location';
import { LcSettings } from './lcListSetting';

@Component({
  selector: 'app-location-list',
  template: `
    <ng2-smart-table [settings]="settings" [source]="source"></ng2-smart-table>
  `,
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit, OnChanges {
  @Input() data!: Location[];
  settings = LcSettings;
  source = new LocalDataSource()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue){
      this.source = new LocalDataSource(this.data)
      this.source.refresh()
    }
  }

}
