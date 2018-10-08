import { KelvinToCelciusPipe } from './kelvin-to-celcius.pipe';
import {TestBed} from '@angular/core/testing';

let pipe: any;
describe('KelvinToCelciusPipe', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [KelvinToCelciusPipe]
    }).compileComponents();
    
    pipe = new KelvinToCelciusPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  
  it('convert kelvin temperatures to °C without decimals', () => {
    expect(pipe.transform(375)).toBe('102°C');
  });
  
});
