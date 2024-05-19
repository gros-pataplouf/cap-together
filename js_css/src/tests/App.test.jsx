import {test, expect, describe} from 'vitest'

import { render, screen } from '@testing-library/react';
import App from "../../src/App";


describe('App', () => {
  test('renders headline', () => {
    render(<App />);
    const text = screen.getByText("Klick mich");
    expect(text).toBeInTheDocument()
  });
});