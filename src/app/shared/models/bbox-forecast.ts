export interface Weather {
  id: number,
  main: string,
  description: string,
  icon: string
}

export interface BboxForecast {
  clouds: {
    all: number
  },
  coord: {
    lat: number,
    lon: number
  },
  dt: number
  id: number,
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    temp_kf: number,
    humidity: number
  },
  weather: Array<Weather>;
  name: string,
  rain: any,
  snow: any,
  wind: { speed: number, deg: number };
}

export interface BboxForecasts {
  calctime: number
  cnt: number
  cod: number
  list: Array<BboxForecast>
}
