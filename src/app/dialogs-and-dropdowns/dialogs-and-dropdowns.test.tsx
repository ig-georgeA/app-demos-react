import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import DialogsAndDropdowns from './dialogs-and-dropdowns';
import 'element-internals-polyfill';

test('renders DialogsAndDropdowns component', () => {
  const wrapper = render(<DialogsAndDropdowns />);
  expect(wrapper).toBeTruthy();
});