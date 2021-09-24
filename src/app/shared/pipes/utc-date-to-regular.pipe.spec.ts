import {UtcDateToRegularPipe} from './utc-date-to-regular.pipe';
import {TestBed} from '@angular/core/testing';

describe('UtcDateToRegularPipe', () => {
  let pipe: UtcDateToRegularPipe;
  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [UtcDateToRegularPipe]
    }).compileComponents();
    pipe = TestBed.get(UtcDateToRegularPipe);
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should converts date from UTC to Regular Time', () => {
    expect(pipe.transform(1539000000)).toBeTruthy('08.10.2018');
  });
});
