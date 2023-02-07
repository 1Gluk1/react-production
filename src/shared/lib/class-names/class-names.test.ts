import {classNames} from 'shared/lib/class-names/class-names';

describe('classNames', () => {
	describe('Positive cases', () => {
		test('First argument should be in result class', () => {
			const expected = 'test-class';
			expect(classNames('test-class')).toBe(expected);
		});

		test('First argument with additional second argument. Should both be in result class.', () => {
			const expected = 'test-class red big';
			expect(classNames('test-class', {red: true, big: true})).toBe(expected);
		});

		test('Should className and additional classed be in result class.', () => {
			const expected = 'test-class light blur';

			expect(
				classNames('test-class', {}, ['light', 'blur']))
				.toBe(expected);
		});

		test('Should all arguments be in result class.', () => {
			const expected = 'test-class light blur hovered scrollable';

			expect(
				classNames('test-class', {hovered: true, scrollable: true}, ['light', 'blur']))
				.toBe(expected);
		});

		test('Should all arguments be in result class, but only one mode value.', () => {
			const expected = 'test-class light blur hovered';

			expect(
				classNames('test-class', {hovered: true, scrollable: false}, ['light', 'blur']))
				.toBe(expected);
		});

		test('Undefined mod value should not be in result class.', () => {
			const expected = 'test-class light blur hovered';

			expect(
				classNames('test-class', {hovered: true, scrollable: undefined}, ['light', 'blur']))
				.toBe(expected);
		});
	});
});
