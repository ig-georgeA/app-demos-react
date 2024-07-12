import { expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import RouteDetails from './route-details';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders RouteDetails component', () => {
  const wrapper = render(<RouteDetails />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});