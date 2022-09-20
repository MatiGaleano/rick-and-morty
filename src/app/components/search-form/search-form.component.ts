import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  template: `
    <form [formGroup]="form" autocomplete="off">
      <div class="input-group">
        <select
          *ngIf="!onCompare"
          formControlName="resource"
          class="form-select col-6"
          id="resource"
          (change)="dataChange($event)"
        >
          <option value="character">Character</option>
          <option value="episode">Episode</option>
          <option value="location">Location</option>
        </select>
        <span *ngIf="onCompare" class="input-group-text col-6">Character</span>
        <input
          formControlName="query"
          type="text"
          class="form-control col-6"
          id="query"
          placeholder="Search"
          (keyup)="dataChange($event)"
        />
      </div>
    </form>
  `,
  styles: [],
})
export class SearchFormComponent implements OnInit {
  @Input() onCompare: boolean = false;
  @Output() searchChange = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      resource: ['character'],
      query: [''],
    });
  }

  ngOnInit(): void {}

  dataChange(event: Event) {
    event.preventDefault;
    let query = this.form.value.query;
    if (query && query.length > 3) {
      this.searchChange.emit(this.form.value);
    }
  }
}
