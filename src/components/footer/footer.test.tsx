import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    const footerText = 'footerTest';

    beforeEach(() => {
      render(<Footer text={footerText}></Footer>);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });

    test('Then it should render the title', () => {
      const element = screen.getByText(footerText);
      expect(element).toBeInTheDocument();
    });
  });
});
