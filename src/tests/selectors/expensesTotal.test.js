import computeSum from '../../selectors/expensesTotal';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = computeSum([]);
    expect(res).toBe(0);
});

test('should add up a single expense', () => {
    const res = computeSum([expenses[0]]);
    expect(res).toBe(expenses[0].amount); // 20000
});

test('should add up multiple expenses', () => {
    const res = computeSum(expenses);
    expect(res).toBe(31089);
});