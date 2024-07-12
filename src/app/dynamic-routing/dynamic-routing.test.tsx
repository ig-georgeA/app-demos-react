import { expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import DynamicRouting from './dynamic-routing';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders DynamicRouting component', () => {
  const wrapper = render(<DynamicRouting />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});