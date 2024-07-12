import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Position from './position';
import 'element-internals-polyfill';

test('renders Position component', () => {
  const wrapper = render(<Position />);
  expect(wrapper).toBeTruthy();
});