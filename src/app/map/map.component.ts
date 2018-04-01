import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
`,
 styles: [`
    agm-map {
      height: 300px;
    }
  `]
})
export class MapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() {}

  ngOnInit() {
  }

}

