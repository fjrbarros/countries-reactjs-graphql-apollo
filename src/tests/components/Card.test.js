import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Card } from '../../components/index';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from '../../redux/index';
import client from '../../graphql/service/index';
import '@testing-library/jest-dom'

const cardProps = {
    name: 'Brazil',
    capital: 'Brasília',
    imgPath: 'https://restcountries.eu/data/bra.svg',
    pathDetail: '/detail/661'
};

describe('Card test', () => {
    afterEach(cleanup);

    it('Flag test', () => {
        const container = render(
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <MemoryRouter>
                        <Card {...cardProps} />
                    </MemoryRouter>
                </Provider>
            </ApolloProvider>
        );

        const image = container.getByRole('img');

        expect(image).toHaveAttribute('src', cardProps.imgPath);
        expect(image).toHaveAttribute('alt', `${cardProps.name} flag`);
    })
});