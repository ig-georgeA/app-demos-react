import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import TabLayout from './tab-layout';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders TabLayout component', () => {
  const wrapper = render(<TabLayout />);
  expect(wrapper).toBeTruthy();
});