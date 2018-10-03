export interface Forecast {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  name?: string;
  wind?: { speed: number};
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    temp_kf: number,
    humidity: number
  };
  weather: Array<{id: number, main: string, description: string, icon: string}>;
  times?: Array<Forecast>;
}
export interface WeatherForecast {
  city:{
    coord: {lat: number, lon: number},
    country: string,
    id: number,
    name: string,
    population: number
  };
  cod: string;
  message: number;
  cnt: number;
  list: Array<Forecast>;
}
