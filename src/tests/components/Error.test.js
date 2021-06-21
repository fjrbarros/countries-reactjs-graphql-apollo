import { cleanup } from '@testing-library/react';
import { Error } from '../../components/index';
import { renderComponent } from '../util';

describe('Container grid', () => {
    afterEach(cleanup);

    it('Child exists', () => {
        const root = renderComponent(<Error textError='Teste' />);

        root.getAllByText('Teste');
    });
});