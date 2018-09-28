export interface Forecast {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
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
}
export interface WeatherForecast {
  city: Array<{
    coord: {lat: number, lon: number},
    country: string,
    id: number,
    name: string,
    population: number
  }>;
  cod: string;
  message: number;
  cnt: number;
  list: Array<Forecast>;
}
