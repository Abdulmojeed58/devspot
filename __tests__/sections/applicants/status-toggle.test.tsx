import { render, screen, fireEvent } from '@testing-library/react';
import StatusToggle from '@/sections/applicants/status-toggle';

describe('StatusToggle', () => {
  it('renders toggles and calls set functions', () => {
    const setOpenToWork = jest.fn();
    const setOpenToProjects = jest.fn();
    render(
      <StatusToggle
        openToWork={true}
        setOpenToWork={setOpenToWork}
        openToProjects={false}
        setOpenToProjects={setOpenToProjects}
      />
    );
    // Find toggles by label or role
    const workToggle = screen.getByLabelText(/open to work/i);
    const projectsToggle = screen.getByLabelText(/open to projects/i);
    fireEvent.click(workToggle);
    fireEvent.click(projectsToggle);
    expect(setOpenToWork).toHaveBeenCalled();
    expect(setOpenToProjects).toHaveBeenCalled();
  });
});
