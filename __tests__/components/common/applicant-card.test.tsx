import { render, screen } from '@testing-library/react';
import ApplicantCard from '@/components/common/applicant-card';
import { IApplicant } from '@/types/applicants-types';

const mockApplicant: IApplicant = {
  id: 'test-id',
  name: 'Jane Doe',
  title: 'Frontend Developer',
  location: 'Remote',
  status: 'Applicant #1',
  match: 85,
  avatarUrl: '/avatars/jane.png',
  likes: 42,
  skills: ['React', 'TypeScript'],
  decision: 'none',
};

describe('ApplicantCard', () => {
  it('renders applicant name and title', () => {
    render(<ApplicantCard applicant={mockApplicant} />);
    expect(screen.getByText('Jane Doe')).toBeDefined();
    expect(screen.getByText('Frontend Developer')).toBeDefined();
  });

  it('renders applicant location', () => {
    render(<ApplicantCard applicant={mockApplicant} />);
    expect(screen.getByText('Remote')).toBeDefined();
  });

  it('renders skills', () => {
    render(<ApplicantCard applicant={mockApplicant} />);
    expect(screen.getByText('React')).toBeDefined();
    expect(screen.getByText('TypeScript')).toBeDefined();
  });
});
