import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import PivotGrid from './pivot-grid';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders PivotGrid component', () => {
  const wrapper = render(<PivotGrid />);
  expect(wrapper).toBeTruthy();
});