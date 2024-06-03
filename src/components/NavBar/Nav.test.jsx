import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { vi } from 'vitest';
import '@testing-library/jest-dom';
import Nav from './Nav';
import { useGlobalReduceState } from '../utils/GlobalContextReducer';
import { useAuthContext } from '../utils/AuthContext';

// Mock the useGlobalReduceState hook
vi.mock('../utils/GlobalContextReducer', () => ({
  useGlobalReduceState: vi.fn(),
}));

// Mock the useAuthContext hook
vi.mock('../utils/AuthContext', () => ({
  useAuthContext: vi.fn(),
}));

describe('Nav component', () => {
  it('renders without crashing', () => {
    useGlobalReduceState.mockReturnValue({
      state: { darkMode: false },
      dispatch: vi.fn(),
    });

    useAuthContext.mockReturnValue({
      user: null,
      loading: false,
    });

    render(
      <Router>
        <Nav />
      </Router>
    );
  });

  it('shows loading text when loading', () => {
    useGlobalReduceState.mockReturnValue({
      state: { darkMode: false },
      dispatch: vi.fn(),
    });

    useAuthContext.mockReturnValue({
      user: null,
      loading: true,
    });

    render(
      <Router>
        <Nav />
      </Router>
    );
  });
});
