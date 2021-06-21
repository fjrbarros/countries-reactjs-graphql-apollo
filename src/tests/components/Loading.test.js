import { cleanup } from '@testing-library/react';
import { Loading } from '../../components/index';
import { renderComponent } from '../util';

describe('Loading children', () => {
    afterEach(cleanup);

    it('Child exists', () => {
        const root = renderComponent(
            <Loading textLoading='Carregando...' />
        );

        root.getByText('Carregando...');
    });
});