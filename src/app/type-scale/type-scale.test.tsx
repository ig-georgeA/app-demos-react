import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import TypeScale from './type-scale';
import 'element-internals-polyfill';

test('renders TypeScale component', () => {
  const wrapper = render(<TypeScale />);
  expect(wrapper).toBeTruthy();
});