import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '@/components/common/pagination';

describe('Pagination', () => {
  it('calls onPrev and onNext when buttons are clicked', () => {
    const onPrev = jest.fn();
    const onNext = jest.fn();
    render(
      <Pagination onPrev={onPrev} onNext={onNext} />
    );
    fireEvent.click(screen.getByLabelText('Previous'));
    expect(onPrev).toHaveBeenCalled();
    fireEvent.click(screen.getByLabelText('Next'));
    expect(onNext).toHaveBeenCalled();
  });

  it('disables prev/next buttons when disablePrev/disableNext is true', () => {
    render(
      <Pagination onPrev={() => {}} onNext={() => {}} disablePrev disableNext />
    );
    expect(screen.getByLabelText('Previous')).toBeDefined();
    expect(screen.getByLabelText('Next')).toBeDefined();
  });
});
