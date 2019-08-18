import { formatNumber, getRandomNumber } from '../Utils';

describe('Utilities module', () => {
  test('Should format number', () => {
    const formatedNumber = formatNumber(200000000000);
    expect(formatedNumber).toBe('200,000,000,000');
  });
  
  test('Should return a random number between interval', () => {
    const min = 12;
    const max = 40;
    const randomNumber = getRandomNumber(min, max);

    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });
});