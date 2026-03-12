import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../app/components/Footer';

// Mock next/link since we're testing outside of Next.js context
jest.mock('next/link', () => {
  return function Link({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>;
  };
});

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />);
    expect(screen.getByText('JEDY Cleaning Services')).toBeInTheDocument();
  });

  it('renders service links', () => {
    render(<Footer />);
    expect(screen.getByText('Weekly Cleaning')).toBeInTheDocument();
    expect(screen.getByText('Deep Cleaning')).toBeInTheDocument();
    expect(screen.getByText('Moving Services')).toBeInTheDocument();
  });

  it('renders company links', () => {
    render(<Footer />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer />);
    expect(screen.getByText('jedycleaning@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('(865) 333-2637')).toBeInTheDocument();
  });

  it('renders current copyright year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });

  it('has correct footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
