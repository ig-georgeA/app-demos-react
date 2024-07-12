import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import CardCalendar from './card-calendar';
import 'element-internals-polyfill';

test('renders CardCalendar component', () => {
  const wrapper = render(<CardCalendar />);
  expect(wrapper).toBeTruthy();
});