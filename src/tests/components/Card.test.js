import { cleanup } from '@testing-library/react';
import { Card } from '../../components/index';
import { renderComponent, cardProps } from '../util';

describe('Card', () => {
    afterEach(cleanup);

    it('Country flag', () => {
        const root = renderComponent(<Card {...cardProps} />);
        const image = root.getByRole('img');

        expect(image).toHaveAttribute('src', cardProps.imgPath);
        expect(image).toHaveAttribute('alt', `${cardProps.name} flag`);
    });

    it('Country name', () => {
        const root = renderComponent(<Card {...cardProps} />);
        root.getByRole('heading', { name: `Country: ${cardProps.name}` });
    });

    it('Country capital', () => {
        const root = renderComponent(<Card {...cardProps} />);
        root.getByRole('heading', { name: `Capital: ${cardProps.capital}` });
    });

    it('Country link', () => {
        const root = renderComponent(<Card {...cardProps} />);
        expect(root.getByRole('link')).toHaveAttribute('href', cardProps.pathDetail);
    });

    it('Country button detail', () => {
        const root = renderComponent(<Card {...cardProps} />);
        root.getByRole('button', { name: /details/i });
    });
});