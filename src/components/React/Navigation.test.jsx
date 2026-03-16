import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Welcome from './Welcome';

describe('Navigation Integration', () => {
  beforeEach(() => {
    // Mock scrollIntoView for all tests
    Element.prototype.scrollIntoView = vi.fn();
  });

  it('renders all sections with correct IDs', () => {
    const { container } = render(<Welcome />);
    
    // Check that all section IDs exist
    expect(container.querySelector('#sobreMi')).toBeInTheDocument();
    expect(container.querySelector('#proyectos')).toBeInTheDocument();
    expect(container.querySelector('#habilidades')).toBeInTheDocument();
    expect(container.querySelector('#contacto')).toBeInTheDocument();
  });

  it('navigation links scroll to corresponding sections', () => {
    const { container } = render(<Welcome />);
    
    // Get the "Sobre Mi" navigation link
    const sobreMiLink = screen.getByText('Sobre Mi');
    fireEvent.click(sobreMiLink);
    
    // Verify scrollIntoView was called
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });

  it('header remains accessible throughout the page', () => {
    const { container } = render(<Welcome />);
    
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
    
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('language toggle affects all bilingual content', () => {
    render(<Welcome />);
    
    // Initially in Spanish
    expect(screen.getByText('Sobre Mi')).toBeInTheDocument();
    expect(screen.getByText('Español')).toBeInTheDocument();
    
    // Click language toggle
    const languageToggle = screen.getByText('Español');
    fireEvent.click(languageToggle);
    
    // Should now be in English
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });
});
