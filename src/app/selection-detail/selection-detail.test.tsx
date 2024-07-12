import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import SelectionDetail from './selection-detail';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders SelectionDetail component', () => {
  const wrapper = render(<SelectionDetail />);
  expect(wrapper).toBeTruthy();
});