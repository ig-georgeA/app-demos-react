import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import FinancialChart from './financial-chart';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders FinancialChart component', () => {
  const wrapper = render(<FinancialChart />);
  expect(wrapper).toBeTruthy();
});