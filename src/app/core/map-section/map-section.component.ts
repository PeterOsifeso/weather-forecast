import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-map-section',
  templateUrl: './map-section.component.html',
  styleUrls: ['./map-section.component.scss']
})
export class MapSectionComponent implements OnInit {
  constructor() { }
  lat: number = 51.678418;
  lng: number = 7.809007;
  ngOnInit() {
    // let options = {
    //   center: {lat: 1234.1234, lng: 1234.1234},
    //   scrollwheel: true,
    //   zoom: 8
    // };
    // this.googleMapsService.initMap(this.gmapElement, options);
  }

}
