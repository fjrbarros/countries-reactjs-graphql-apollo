import { cleanup } from '@testing-library/react';
import { TopBar } from '../../components/index';
import { renderComponent, topBarProps } from '../util';

describe('Topbar', () => {
    afterEach(cleanup);

    it('Input placeholder', () => {
        const root = renderComponent(<TopBar {...topBarProps} />);
        const textBox = root.getByRole('textbox');

        expect(textBox).toHaveAttribute('placeholder', topBarProps.textSearch);
    });
});