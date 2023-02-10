import {render} from '@testing-library/react';
import {type ReactNode} from 'react';
import {MemoryRouter} from 'react-router-dom';
import {I18nextProvider} from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18n-for-tests';

export type renderForTestOptions = {
	route?: string;
};

export function renderForTest(component: ReactNode, options: renderForTestOptions = {route: '/'}) {
	const {route = '/'} = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={i18nForTests}>
				{component}
			</I18nextProvider>
		</MemoryRouter>,
	);
}
