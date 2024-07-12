import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import ExpansionPanelsTree from './expansion-panels-tree';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders ExpansionPanelsTree component', () => {
  const wrapper = render(<ExpansionPanelsTree />);
  expect(wrapper).toBeTruthy();
});