import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from 'widgets/Sidebar';
import {renderForTest} from 'shared/lib/tests/component-render/render-for-test';

describe('Sidebar', () => {
	test('Should render', () => {
		renderForTest(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('Should collapse and expand, after clicks on toggle button', () => {
		renderForTest(<Sidebar />);

		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();

		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');

		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
	});
});
