import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import { FormPersonalData } from './form.personal';

describe('Given FormPersonalData component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<FormPersonalData></FormPersonalData>);
    });

    test('It should be in the document', () => {
      const element = screen.getByRole('form');
      expect(element).toBeInTheDocument();
    });

    test('Its button should be used', async () => {
      const input = screen.getByRole('textbox');
      const inputRadio = screen.getByRole('radio');

      await userEvent.type(input, 'Abel');
      expect(input).toHaveValue('Abel');

      await userEvent.type(inputRadio, 'Man');
      expect(inputRadio).toHaveValue('Man');
    });
  });
});
