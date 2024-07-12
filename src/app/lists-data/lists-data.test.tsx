import { expect, test, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import ListsData from './lists-data';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders ListsData component', () => {
  const wrapper = render(<ListsData />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});