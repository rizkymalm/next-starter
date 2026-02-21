import { fireEvent, render, screen } from '@testing-library/react';

import ButtonPrimary from './ButtonPrimary';

describe('Button Component', () => {
    it('renders correctly', () => {
        render(
            <ButtonPrimary
                text="Click Me"
                type="button"
                variant="outline"
                size="md"
            />
        );
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const mockFn = jest.fn();
        render(
            <ButtonPrimary
                text="Click Me"
                type="button"
                variant="outline"
                size="md"
                onClick={mockFn}
            />
        );

        fireEvent.click(screen.getByText('Click Me'));
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
