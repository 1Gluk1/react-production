import {render, screen} from '@testing-library/react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';

describe('Button', () => {
	const text = 'Click';

	test('Should render', () => {
		render(<Button>{text}</Button>);
		expect(screen.getByText(text)).toBeInTheDocument();
	});

	test('Should have class="clear" when theme={ThemeButton.CLEAR}', () => {
		render(<Button theme={ButtonTheme.CLEAR}>{text}</Button>);
		expect(screen.getByText(text)).toHaveClass('clear');
	});
});
