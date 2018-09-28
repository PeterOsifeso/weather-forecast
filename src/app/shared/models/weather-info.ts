export interface WeatherInfo {
  base: string;
  clouds: {all: number};
  cod: number;
  coord: {lon: number, lat: number};
  dt: number;
  id: number;
  main: {temp: number, pressure: number, humidity: number, temp_min: number, temp_max: number};
  sys: {type: number, id: number, message: number, country: string, sunrise: number, sunset: number};
  visibility: number;
  weather: Array<{description: string, icon: string, id: number, main: string}>;
  wind: {speed: number, deg: number};
}
