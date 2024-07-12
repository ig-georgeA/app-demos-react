import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import GridAndTreeGrid from './grid-and-tree-grid';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders GridAndTreeGrid component', () => {
  const wrapper = render(<GridAndTreeGrid />);
  expect(wrapper).toBeTruthy();
});