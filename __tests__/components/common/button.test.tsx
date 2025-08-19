import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/common/button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies the correct variant and size classes', () => {
    render(<Button variant="gradient" size="lg">Test</Button>);
    const btn = screen.getByText('Test');
    expect(btn.className).toMatch(/gradient/);
    expect(btn.className).toMatch(/lg/);
  });

  it('is disabled when disabled prop is set', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDefined();
  });
});
