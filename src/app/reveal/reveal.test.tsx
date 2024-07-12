import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Reveal from './reveal';
import 'element-internals-polyfill';

test('renders Reveal component', () => {
  const wrapper = render(<Reveal />);
  expect(wrapper).toBeTruthy();
});