import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Inputs from './inputs';
import 'element-internals-polyfill';

test('renders Inputs component', () => {
  const wrapper = render(<Inputs />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});