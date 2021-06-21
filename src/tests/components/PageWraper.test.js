import { cleanup } from '@testing-library/react';
import { PageWrapper } from '../../components/index';
import { pageWrapperProps, renderComponent } from '../util';

describe('Page', () => {
  afterEach(cleanup);

  it('Child exists', () => {
    const root = renderComponent(
      <PageWrapper {...pageWrapperProps} >
        <span>Teste</span>
      </PageWrapper>
    );

    root.getByText('Teste');
  });
});