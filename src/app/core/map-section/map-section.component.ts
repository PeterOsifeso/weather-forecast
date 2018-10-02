import {Component, OnInit, ViewChild} from '@angular/core';
import {WeatherWidgetService} from '../../services/weather-widget.service';
import {WeatherForecast} from '../../shared/models/weather-forecast';
import {PaginationService} from '../../services/pagination.service';
import {AgmMap, LatLngBounds, GoogleMapsAPIWrapper} from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-map-section',
  templateUrl: './map-section.component.html',
  styleUrls: ['./map-section.component.scss']
})
export class MapSectionComponent implements OnInit {
  @ViewChild('AgmMap') agmMap: AgmMap;
  lat: number = 54.5260;
  lng: number = 15.2551;
  cities: Array<any>;
  imgUrl = 'http://openweathermap.org/img/w/';
  
  constructor(private paginationService: PaginationService) {
  }
  
  ngOnInit() {
    this.paginationService.getItems().subscribe(
      data => {
        this.cities = data;
        this.setMapCenter();
      });
  }
  
  setMapCenter() {
    this.agmMap.mapReady.subscribe(
      map => {
        const bounds: LatLngBounds = new google.maps.LatLngBounds();
        this.cities.forEach(
          city => bounds.extend(new google.maps.LatLng(city.coord.Lat, city.coord.Lon))
        );
        map.fitBounds(bounds);
      }
    );
  }
}
