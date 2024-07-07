import {test, expect, describe} from 'vitest'

import { render, screen } from '@testing-library/react';
import App from "../../src/App";


describe('App', () => {
  test('react component renders', () => {
    render(<App />);
    const text = screen.getByText("Klick mich");
    expect(text).toBeInTheDocument()
  });
});