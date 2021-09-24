import {Injectable} from '@angular/core';
import {OPEN_WEATHER_API_CONFIG} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {WeatherForecast} from '../shared/models/weather-forecast';
import {BboxForecasts} from '../shared/models/bbox-forecast';
import {tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OpenWeatherService {
    private cityForecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    private bBoxForecastApiUrl = 'http://api.openweathermap.org/data/2.5/box/city';
    private pollutionApiUrl = 'http://api.openweathermap.org/pollution/v1/co/';

    private bboxForecastForCurrentMapRegion: BehaviorSubject<BboxForecasts> = new BehaviorSubject<BboxForecasts>(null);

    constructor(private http: HttpClient) {
    }

    getCityForecast(cityName: string): Observable<WeatherForecast> {
        const params = {
            q: cityName,
            units: 'metric',
            appId: OPEN_WEATHER_API_CONFIG.API_KEY
        };
        return this.http.get<WeatherForecast>(this.cityForecastApiUrl, {params});
    }

    getBboxForecast(bbox): Observable<BboxForecasts> {
        const params = {
            bbox: bbox,
            units: 'metric',
            appId: OPEN_WEATHER_API_CONFIG.API_KEY
        };
        return this.http.get<BboxForecasts>(this.bBoxForecastApiUrl, {params})
            .pipe(tap((bboxForecasts) => this.bboxForecastForCurrentMapRegion.next(bboxForecasts)));
    }

    fetchBboxForecastForMapRegion(): Observable<BboxForecasts> {
        return this.bboxForecastForCurrentMapRegion.asObservable();
    }

    getPollution(lat: number, lon: number, dateTime: Date): Observable<any> {
        const date = new Date(dateTime.toUTCString());
        this.pollutionApiUrl += `${this.pollutionApiUrl}${lat},${lon}/${date.toISOString()}.json`;
        const params = {
            appid: OPEN_WEATHER_API_CONFIG.API_KEY,
        };
        return this.http.get(this.pollutionApiUrl, {params});
    }
}
