import { cleanup } from '@testing-library/react';
import { ContainerGrid } from '../../components/index';
import { renderComponent } from '../util';

describe('Container grid', () => {
    afterEach(cleanup);

    it('Child exists', () => {
        const { getByText } = renderComponent(
            <ContainerGrid>
                <span>teste</span>
            </ContainerGrid>
        );

        getByText('teste');
    });
});