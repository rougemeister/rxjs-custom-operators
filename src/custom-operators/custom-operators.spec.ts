import { of } from 'rxjs';
import { multiplyBy } from './custom-operators';
import { TestScheduler } from 'rxjs/testing';

describe('Custom Operator: multiplyBy', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should multiply numeric values by the factor', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = of(1, 2, 3);
      const result$ = source$.pipe(multiplyBy(2));
      const expected = '(abc|)';
      const expectedValues = { a: 2, b: 4, c: 6 };
      expectObservable(result$).toBe(expected, expectedValues);
    });
  });

  it('should ignore non-numeric values', () => {
    testScheduler.run(({ expectObservable }) => {
      const source$ = of(1, 'Hello', 3);
      const result$ = source$.pipe(multiplyBy(2));
      const expected = '(abc|)';
      const expectedValues = { a: 2, b: 'Hello', c: 6 };
      expectObservable(result$).toBe(expected, expectedValues);
    });
  });
});
