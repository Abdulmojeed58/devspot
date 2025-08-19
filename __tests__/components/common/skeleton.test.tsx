import { render } from '@testing-library/react';
import Skeleton from '@/components/common/skeleton';

describe('Skeleton', () => {
  it('renders with default class', () => {
    const { container } = render(<Skeleton />);
    // @ts-expect-error - container.firstChild is not typed
    expect(container.firstChild).toHaveClass('animate-pulse');
  });

  it('applies custom className', () => {
    const { container } = render(<Skeleton className="h-10 w-10" />);
    // @ts-expect-error - container.firstChild is not typed
    expect(container.firstChild).toHaveClass('h-10');
    // @ts-expect-error - container.firstChild is not typed
    expect(container.firstChild).toHaveClass('w-10');
  });
});
