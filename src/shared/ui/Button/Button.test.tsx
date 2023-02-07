import {render, screen} from '@testing-library/react';
import {Button, ThemeButton} from 'shared/ui/Button/Button';

describe('Button', () => {
	const text = 'Click';

	test('Should render', () => {
		render(<Button>{text}</Button>);
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	test('Should have class="clear" when theme={ThemeButton.CLEAR}', () => {
		render(<Button theme={ThemeButton.CLEAR}>{text}</Button>);
		expect(screen.getByText(text)).toHaveClass('clear');
	});
});
