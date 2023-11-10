import { render, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';

import App from './App';


function setup() {
    return render(
        <App />
    )
}

describe('App.tsx', () => {
    test('test', () => {

        expect(true).toBeTruthy();
    });

    test('App renders without crashing', () => {
        const { getByText } = setup();

        expect(getByText('Vite + React')).toBeInTheDocument()
    })

    test('Counter increments correctly', async () => {
        const { getByText } = setup();

        expect(getByText('count is 0')).toBeInTheDocument();

        userEvent.click(getByText('count is 0'));

        await waitFor(() => {
            expect(getByText('count is 1')).toBeInTheDocument();
        })

    });

    test('Counter can be clicked 10 times', async () => {

        const { getByText } = setup();
        for (let i = 0; i < 10; i++) {
            userEvent.click(getByText('count is 0'));
        }

        await waitFor(() => {
            expect(getByText('count is 10')).toBeInTheDocument();
        })

    });
});