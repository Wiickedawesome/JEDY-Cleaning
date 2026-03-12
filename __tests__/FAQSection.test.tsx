import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FAQSection from '../app/components/FAQSection';

describe('FAQSection', () => {
  it('renders the FAQ heading', () => {
    render(<FAQSection />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
  });

  it('renders the section subheading', () => {
    render(<FAQSection />);
    expect(screen.getByText('Common Questions')).toBeInTheDocument();
  });

  it('renders all FAQ questions', () => {
    render(<FAQSection />);
    expect(screen.getByText('What areas do you serve?')).toBeInTheDocument();
    expect(screen.getByText('What cleaning services do you offer?')).toBeInTheDocument();
    expect(screen.getByText('Do you bring your own cleaning supplies?')).toBeInTheDocument();
    expect(screen.getByText('How do I get a free quote?')).toBeInTheDocument();
    expect(screen.getByText('Are you insured and bonded?')).toBeInTheDocument();
  });

  it('renders FAQ answers', () => {
    render(<FAQSection />);
    expect(screen.getByText(/Greater Knoxville, TN/)).toBeInTheDocument();
    expect(screen.getByText(/eco-friendly, pet-safe/)).toBeInTheDocument();
  });

  it('includes FAQ schema.org structured data', () => {
    render(<FAQSection />);
    const script = document.querySelector('script[type="application/ld+json"]');
    expect(script).toBeInTheDocument();
    
    const schemaData = JSON.parse(script?.textContent || '{}');
    expect(schemaData['@type']).toBe('FAQPage');
    expect(schemaData.mainEntity).toHaveLength(5);
  });

  it('has correct accessibility attributes', () => {
    render(<FAQSection />);
    expect(screen.getByRole('region', { name: /frequently asked questions/i })).toBeInTheDocument();
  });

  it('renders expandable details elements', () => {
    render(<FAQSection />);
    const details = document.querySelectorAll('details');
    expect(details).toHaveLength(5);
  });
});
