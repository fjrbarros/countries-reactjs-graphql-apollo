import { cleanup } from '@testing-library/react';
import { ContainerGrid } from '../../components/index';
import { renderComponent } from '../util';

describe('Container grid test', () => {
    afterEach(cleanup);

    it('Child test', () => {
        const { getByText } = renderComponent(
            <ContainerGrid>
                <span>test</span>
            </ContainerGrid>
        );

        getByText('test');
    });
});