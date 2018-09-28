import { WeatherWidgetModule } from './weather-widget.module';

describe('WeatherWidgetModule', () => {
  let weatherWidgetModule: WeatherWidgetModule;

  beforeEach(() => {
    weatherWidgetModule = new WeatherWidgetModule();
  });

  it('should create an instance', () => {
    expect(weatherWidgetModule).toBeTruthy();
  });
});
