import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Stepper from './stepper';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders Stepper component', () => {
  const wrapper = render(<Stepper />);
  expect(wrapper).toBeTruthy();
});