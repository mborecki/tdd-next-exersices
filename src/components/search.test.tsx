import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Search from './search';

describe('Search form', () => {
    it('should have input element', () => {

        render(<Search />);

        const input = document.querySelector('input');

        expect(input).toBeInTheDocument();
    });

    it('should have button', async () => {
        render(<Search />);

        const button = await screen.findByRole('button', {name: 'Szukaj'});

        expect(button).toBeInTheDocument();
    });
});
