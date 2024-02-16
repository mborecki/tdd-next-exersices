import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'

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

    it('should call onSeach callback', async () => {
        const handler = jest.fn();

        render(<Search onSearch={handler} />);
        const button = await screen.findByRole('button', {name: 'Szukaj'});
        const input = document.querySelector('input');

        const user = userEvent.setup();

        await user.click(input!);
        await user.keyboard('foo')
        await user.click(button);

        expect(handler).toHaveBeenCalledWith('foo');
    });
});
