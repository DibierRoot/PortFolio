import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  describe('Navigation Links', () => {
    it('displays navigation links to all main sections', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      // Check Spanish navigation links
      expect(screen.getByText('Sobre Mi')).toBeInTheDocument();
      expect(screen.getByText('Proyectos')).toBeInTheDocument();
      expect(screen.getByText('Habilidades')).toBeInTheDocument();
      expect(screen.getByText('Contacto')).toBeInTheDocument();
    });

    it('displays navigation links in English when idioma is true', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={true} cambiarIdioma={mockCambiarIdioma} />);
      
      // Check English navigation links
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('Skills')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('implements smooth scroll navigation when links are clicked', () => {
      const mockCambiarIdioma = vi.fn();
      const mockScrollIntoView = vi.fn();
      
      // Mock getElementById and scrollIntoView
      const mockElement = { scrollIntoView: mockScrollIntoView };
      vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);
      
      render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      // Click on "Sobre Mi" link
      const sobreMiLink = screen.getByText('Sobre Mi');
      fireEvent.click(sobreMiLink);
      
      expect(document.getElementById).toHaveBeenCalledWith('sobre-mi');
      expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    });
  });

  describe('Language Selector', () => {
    it('displays language selector button', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      expect(screen.getByText('Español')).toBeInTheDocument();
    });

    it('calls cambiarIdioma when language selector is clicked', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      const languageButton = screen.getByText('Español');
      fireEvent.click(languageButton);
      
      expect(mockCambiarIdioma).toHaveBeenCalledTimes(1);
    });
  });

  describe('Welcome Message', () => {
    it('displays bilingual welcome message in Spanish', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      expect(screen.getByText('Hola,')).toBeInTheDocument();
      expect(screen.getByText('Soy Cristián')).toBeInTheDocument();
    });

    it('displays bilingual welcome message in English', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={true} cambiarIdioma={mockCambiarIdioma} />);
      
      expect(screen.getByText('Hi,')).toBeInTheDocument();
      expect(screen.getByText("I'm Cristián")).toBeInTheDocument();
    });
  });

  describe('Professional Role Description', () => {
    it('displays professional role in Spanish', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      expect(screen.getByText('Programador Front-end')).toBeInTheDocument();
    });

    it('displays professional role in English', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={true} cambiarIdioma={mockCambiarIdioma} />);
      
      expect(screen.getByText('Front-end Developer')).toBeInTheDocument();
    });
  });

  describe('CV Download Button', () => {
    it('displays CV download button with correct link', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      const cvLink = screen.getByText('Descargar CV');
      expect(cvLink).toBeInTheDocument();
      expect(cvLink).toHaveAttribute('href', '/CVCRISTIANRINCON.pdf');
      expect(cvLink).toHaveAttribute('target', '_blank');
    });

    it('displays CV download button in English', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={true} cambiarIdioma={mockCambiarIdioma} />);
      
      const cvLink = screen.getByText('Download CV');
      expect(cvLink).toBeInTheDocument();
      expect(cvLink).toHaveAttribute('href', '/CVCRISTIANRINCON.pdf');
    });
  });

  describe('Social Media Links', () => {
    it('displays GitHub link', () => {
      const mockCambiarIdioma = vi.fn();
      const { container } = render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      const githubLink = container.querySelector('a[href="https://github.com/DibierRoot"]');
      expect(githubLink).toBeInTheDocument();
      expect(githubLink).toHaveAttribute('target', '_blank');
    });

    it('displays LinkedIn link', () => {
      const mockCambiarIdioma = vi.fn();
      const { container } = render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      const linkedinLink = container.querySelector('a[href*="linkedin.com"]');
      expect(linkedinLink).toBeInTheDocument();
      expect(linkedinLink).toHaveAttribute('target', '_blank');
    });

    it('displays Instagram link', () => {
      const mockCambiarIdioma = vi.fn();
      const { container } = render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      const instagramLink = container.querySelector('a[href*="instagram.com"]');
      expect(instagramLink).toBeInTheDocument();
      expect(instagramLink).toHaveAttribute('target', '_blank');
    });
  });

  describe('Profile Image', () => {
    it('displays profile image from correct path', () => {
      const mockCambiarIdioma = vi.fn();
      render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      const profileImage = screen.getByAltText('FotoDibi');
      expect(profileImage).toBeInTheDocument();
      expect(profileImage).toHaveAttribute('src', '/FotoGafas.jpg');
    });
  });

  describe('Header Accessibility', () => {
    it('renders header element with navigation', () => {
      const mockCambiarIdioma = vi.fn();
      const { container } = render(<Header idioma={false} cambiarIdioma={mockCambiarIdioma} />);
      
      const header = container.querySelector('header');
      expect(header).toBeInTheDocument();
      
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();
    });
  });
});
