import { UtcDateToRegularPipe } from './utc-date-to-regular.pipe';

describe('UtcDateToRegularPipe', () => {
  it('create an instance', () => {
    const pipe = new UtcDateToRegularPipe();
    expect(pipe).toBeTruthy();
  });
});
