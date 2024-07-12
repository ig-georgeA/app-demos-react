import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import PickersCombo from './pickers-combo';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders PickersCombo component', () => {
  const wrapper = render(<PickersCombo />);
  expect(wrapper).toBeTruthy();
});