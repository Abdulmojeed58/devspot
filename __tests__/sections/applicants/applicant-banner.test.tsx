import { render, screen } from '@testing-library/react';
import ApplicantBanner from '@/sections/applicants/applicant-banner';
import { IApplicantDetails } from '@/types/applicants-types';

const mockApplicant: IApplicantDetails = {
  applicantId: 1,
  name: 'Jane Doe',
  title: 'Frontend Developer',
  match: 90,
  avatarUrl: '/avatars/jane.png',
  openToWork: true,
  openToProjects: false,
  about: 'About Jane',
  location: 'Remote',
  yearsExperience: 5,
  website: 'https://example.com',
  developerAccounts: [],
  customFields: [],
  skills: ['React', 'TypeScript'],
  technologies: [],
  id: '1',
};

describe('ApplicantBanner', () => {
  it('renders applicant name, title, and avatar', () => {
    render(
      <ApplicantBanner
        applicant={mockApplicant}
        openToWork={true}
        openToProjects={false}
      />
    );
    expect(screen.getByText('Jane Doe')).toBeDefined();
    expect(screen.getByText('Frontend Developer')).toBeDefined();
    // Avatar is rendered as an img with alt text
    expect(screen.getByAltText('Jane Doe')).toBeDefined();
  });
});
