import {Component, OnDestroy, OnInit} from '@angular/core';
import {OpenWeatherService} from '../../services/open-weather.service';
import {BboxForecast} from '../../shared/models/bbox-forecast';


@Component({
    selector: 'app-map-section',
    templateUrl: './map-section.component.html',
    styleUrls: ['./map-section.component.scss']
})
export class MapSectionComponent implements OnInit, OnDestroy {
    lat = 55.304138;
    lng = 9.360352;
    cities: Array<BboxForecast>;
    imgUrl = 'http://openweathermap.org/img/w/';
    bBoxSub: any;

    northEastLat: number;
    northEastLng: number;
    southWestLat: number;
    southWestLng: number;
    bBox: any;
    zoom = 8;

    constructor(private openWeatherService: OpenWeatherService) {
    }

    ngOnInit() {
    }

    boundsChanged(event): void {
        this.northEastLat = event.getNorthEast().lat();
        this.northEastLng = event.getNorthEast().lng();
        this.southWestLat = event.getSouthWest().lat();
        this.southWestLng = event.getSouthWest().lng();
        this.bBox = `${this.southWestLng},${this.southWestLat},${this.northEastLng},${this.northEastLat},${this.zoom}`;
    }

    setZoom(zoom) {
        this.zoom = zoom;
    }

    getCitiesInBounds() {
        if (this.bBoxSub) {
            this.bBoxSub.unsubscribe();
        }
        this.bBoxSub = this.openWeatherService.getBboxForecast(this.bBox).subscribe(
            data => {
                if (data && data.list) {
                    this.cities = data.list;
                }
            }, error => {
                alert('Map area too large to load cities');
            }
        );
    }

    ngOnDestroy() {
        if (this.bBoxSub) {
            this.bBoxSub.unsubscribe();
        }
    }
}
