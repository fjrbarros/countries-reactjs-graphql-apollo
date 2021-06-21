import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from '../redux/index';
import client from '../graphql/service/index';

// screen.logTestingPlaygroundURL();

export function renderComponent(Component) {
    return render(
        <ApolloProvider client={client}>
            <Provider store={store}>
                <MemoryRouter>
                    {Component}
                </MemoryRouter>
            </Provider>
        </ApolloProvider>
    );
}

export const cardProps = {
    name: 'Brazil',
    capital: 'Brasília',
    imgPath: 'https://restcountries.eu/data/bra.svg',
    pathDetail: '/detail/661'
};

export const topBarProps = {
    textSearch: 'Country name...',
    valueSearch: '',
    onChangeSearch: jest.fn()
}

export const pageWrapperProps = {
    textSearch: 'Country name...',
    valueSearch: 'Brazil',
    onChangeSearch: jest.fn()
}