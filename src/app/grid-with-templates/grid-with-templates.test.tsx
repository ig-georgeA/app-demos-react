import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import GridWithTemplates from './grid-with-templates';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders GridWithTemplates component', () => {
  const wrapper = render(<GridWithTemplates />);
  expect(wrapper).toBeTruthy();
});