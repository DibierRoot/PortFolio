# Documento de Diseño - Portfolio Personal

## Introducción

Este documento define el diseño técnico para el portfolio personal desarrollado con Astro y React. El sistema presenta una arquitectura basada en componentes React integrados en páginas Astro, aprovechando la generación estática y la hidratación parcial para optimizar el rendimiento. El portfolio incluye secciones de bienvenida, información personal, proyectos, habilidades técnicas y contacto, todo con diseño responsivo y accesible.

## Visión General

El portfolio personal es una aplicación web estática construida con Astro como framework principal y React para componentes interactivos. La arquitectura aprovecha las capacidades de Astro para generar HTML estático con hidratación selectiva de componentes React solo donde se necesita interactividad.

### Objetivos del Diseño

- Crear una experiencia de usuario fluida y profesional
- Optimizar el rendimiento mediante generación estática y carga eficiente de recursos
- Mantener un diseño responsivo que funcione en todos los dispositivos
- Facilitar el mantenimiento y la actualización del contenido
- Asegurar accesibilidad y buenas prácticas web

### Stack Tecnológico

- **Framework Principal**: Astro 4.x
- **Biblioteca de UI**: React 18.x
- **Estilos**: Tailwind CSS 3.x
- **Animaciones**: Framer Motion
- **Build Tool**: Vite
- **Lenguaje**: JavaScript/JSX

## Arquitectura

### Arquitectura de Alto Nivel

El sistema sigue una arquitectura de componentes con las siguientes capas:

```
┌─────────────────────────────────────┐
│         Astro Page Layer            │
│  (index.astro - Static Generation)  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      React Component Layer          │
│  - Welcome (Container)              │
│  - Header (Navigation)              │
│  - SobreMi (About)                  │
│  - ProyectosyHabilidades (Projects) │
│  - Contacto (Contact)               │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│        Static Assets Layer          │
│  - Images (public/)                 │
│  - Icons (public/)                  │
│  - CV Document (public/)            │
└─────────────────────────────────────┘
```

### Estrategia de Hidratación

El sistema utiliza la directiva `client:visible` de Astro para hidratar componentes React solo cuando son visibles en el viewport, optimizando el tiempo de carga inicial:

- **Welcome Component**: Hidratación inmediata (componente raíz)
- **Header Component**: Hidratación inmediata (navegación)
- **SobreMi Component**: Hidratación cuando es visible
- **ProyectosyHabilidades Component**: Hidratación cuando es visible
- **Contacto Component**: Hidratación cuando es visible

### Gestión de Estado

El estado de la aplicación es mínimo y se gestiona localmente:

- **Estado de Idioma**: Gestionado en el componente Welcome mediante `useState`
- **Propagación**: El estado de idioma se pasa como prop a todos los componentes hijos
- **No hay estado global**: No se requiere Context API ni gestión de estado compleja

## Componentes e Interfaces

### 1. Welcome Component (Componente Contenedor)

**Responsabilidad**: Componente raíz que orquesta todos los demás componentes y gestiona el estado del idioma.

**Props**: Ninguna (componente raíz)

**Estado Interno**:
```javascript
{
  idioma: boolean  // false = Español, true = English
}
```

**Funciones**:
- `cambiarIdioma()`: Alterna el estado del idioma

**Estructura**:
```jsx
<div>
  <Header idioma={idioma} cambiarIdioma={cambiarIdioma} />
  <main>
    <SobreMi idioma={idioma} />
    <ProyectosyHabilidades idioma={idioma} />
    <Contacto idioma={idioma} />
  </main>
  <footer>
    {/* Copyright notice */}
  </footer>
</div>
```

### 2. Header Component

**Responsabilidad**: Proporcionar navegación y mostrar información de bienvenida con foto de perfil.

**Props**:
```typescript
interface HeaderProps {
  idioma: boolean;
  cambiarIdioma: () => void;
}
```

**Elementos Clave**:
- Barra de navegación con selector de idioma
- Mensaje de bienvenida personalizado
- Descripción del rol profesional
- Botón de descarga de CV
- Enlaces a redes sociales (GitHub, LinkedIn, Instagram)
- Imagen de perfil

**Rutas de Assets**:
- Imagen de perfil: `/FotoGafas.jpg`
- CV: `/CVCRISTIANRINCON.pdf`

### 3. SobreMi Component (About)

**Responsabilidad**: Mostrar información personal y profesional del desarrollador.

**Props**:
```typescript
interface SobreMiProps {
  idioma: boolean;
}
```

**Elementos Clave**:
- Iconos de tecnologías principales (HTML5, CSS3, JavaScript)
- Título de sección
- Descripción personal y profesional bilingüe

**Rutas de Assets**:
- `/HTML5Icon.svg`
- `/CSS3Icon.svg`
- `/JSIcon.svg`

### 4. ProyectosyHabilidades Component

**Responsabilidad**: Presentar proyectos completados y habilidades técnicas.

**Props**:
```typescript
interface ProyectosyHabilidadesProps {
  idioma: boolean;
}
```

**Estructura de Datos de Proyectos**:
```typescript
interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  technologies: string[];  // Array de rutas a iconos
}
```

**Proyectos Actuales**:
1. **OcoboShop**
   - Imagen: `/PortadaOcoboShop.png`
   - Tecnologías: React, PHP, MySQL
   - GitHub: https://github.com/DibierRoot/OcoboShop

2. **PortFolio**
   - Imagen: `/PortadaPortFolio.png`
   - Tecnologías: Astro, React
   - GitHub: https://github.com/DibierRoot/PortFolio

**Categorías de Habilidades**:
- **Lenguajes**: HTML5, CSS3, JavaScript
- **Frameworks y Librerías**: React, Tailwind
- **Herramientas y Tecnologías**: Git, GitHub, Vite, npm

**Animaciones**: Utiliza Framer Motion con `initial`, `whileInView`, y `viewport` para animaciones de entrada.

### 5. Contacto Component

**Responsabilidad**: Mostrar información de contacto y enlaces a redes sociales.

**Props**:
```typescript
interface ContactoProps {
  idioma: boolean;
}
```

**Enlaces de Contacto**:
- LinkedIn: https://www.linkedin.com/in/cristián-camilo-rincón-lozano-76b55230a
- GitHub: https://github.com/DibierRoot
- WhatsApp: https://wa.me/573102955230
- Instagram: https://www.instagram.com/dibier_oc

**Animaciones**: Utiliza Framer Motion similar al componente de proyectos.

## Modelos de Datos

### Asset Paths Configuration

```javascript
const ASSET_PATHS = {
  // Profile Images
  profileMain: '/FotoGafas.jpg',
  profileAlt: '/Foto.jpg',
  
  // Documents
  cv: '/CVCRISTIANRINCON.pdf',
  
  // Technology Icons
  icons: {
    astro: '/AstroIcon.svg',
    react: '/ReactIcon.svg',
    javascript: '/JSIcon.svg',
    html5: '/HTML5Icon.svg',
    css3: '/CSS3Icon.svg',
    tailwind: '/TailwindIcon.svg',
    vite: '/ViteIcon.svg',
    php: '/PHPIcon.svg',
    mysql: '/MySQLIcon.svg',
    git: '/GitIcon.svg',
    github: '/GitHubIcon.svg',
    npm: '/NpmIcon.svg'
  },
  
  // Project Images
  projects: {
    ocoboShop: '/PortadaOcoboShop.png',
    portfolio: '/PortadaPortFolio.png'
  },
  
  // Branding
  logo: '/Logo.jpeg',
  favicon: '/favicon.svg'
};
```

### Content Structure

```javascript
const CONTENT = {
  personal: {
    name: 'Cristián Rincón',
    role: {
      es: 'Programador Front-end',
      en: 'Front-end Developer'
    },
    email: 'criscami562@gmail.com',
    phone: '+573102955230'
  },
  
  social: {
    github: 'https://github.com/DibierRoot',
    linkedin: 'https://www.linkedin.com/in/cristián-camilo-rincón-lozano-76b55230a',
    instagram: 'https://www.instagram.com/dibier_oc',
    whatsapp: 'https://wa.me/573102955230'
  },
  
  projects: [
    {
      id: 'ocobo-shop',
      title: 'OcoboShop',
      description: {
        es: 'Tienda online de Merch de Ocoboo',
        en: 'Ocobo merch online store'
      },
      image: '/PortadaOcoboShop.png',
      github: 'https://github.com/DibierRoot/OcoboShop',
      technologies: ['react', 'php', 'mysql']
    },
    {
      id: 'portfolio',
      title: 'PortFolio',
      description: {
        es: 'PortFolio Personal',
        en: 'Personal PortFolio'
      },
      image: '/PortadaPortFolio.png',
      github: 'https://github.com/DibierRoot/PortFolio',
      technologies: ['astro', 'react']
    }
  ],
  
  skills: {
    languages: ['html5', 'css3', 'javascript'],
    frameworks: ['react', 'tailwind'],
    tools: ['git', 'github', 'vite', 'npm']
  }
};
```

## Correctness Properties

*Una propiedad es una característica o comportamiento que debe mantenerse verdadero en todas las ejecuciones válidas de un sistema - esencialmente, una declaración formal sobre lo que el sistema debe hacer. Las propiedades sirven como puente entre las especificaciones legibles por humanos y las garantías de correctitud verificables por máquinas.*

### Property 1: Navigation Link Scroll Behavior

*Para cualquier* enlace de navegación en el Header, cuando un usuario hace clic en él, el sistema debe hacer scroll a la sección correspondiente del portfolio.

**Validates: Requirements 2.2**

### Property 2: Header Accessibility During Scroll

*Para cualquier* posición de scroll en la página, el Header debe permanecer accesible y visible para el usuario.

**Validates: Requirements 2.3**

### Property 3: Active Section Indication

*Para cualquier* sección que esté actualmente visible en el viewport, el Header debe indicar visualmente cuál es la sección activa.

**Validates: Requirements 2.4**

### Property 4: Project Image Display

*Para cada* proyecto en la lista de proyectos, el componente debe renderizar una imagen de proyecto (Project_Image).

**Validates: Requirements 4.2**

### Property 5: Project Information Completeness

*Para cada* proyecto en la lista de proyectos, el componente debe mostrar un título y una descripción breve.

**Validates: Requirements 4.3**

### Property 6: Project Technologies Display

*Para cada* proyecto en la lista de proyectos, el componente debe mostrar las tecnologías utilizadas en ese proyecto.

**Validates: Requirements 4.4**

### Property 7: Project Image Dimensions

*Para cualquier* imagen de proyecto que esté disponible, el componente debe renderizarla con dimensiones y aspect ratio apropiados.

**Validates: Requirements 4.5**

### Property 8: Technology Icon Mapping

*Para cada* tecnología en la lista de habilidades, el componente debe mostrar el icono correspondiente a esa tecnología.

**Validates: Requirements 5.2**

### Property 9: Contact Link Behavior

*Para cualquier* enlace de contacto (redes sociales), cuando se hace clic, el sistema debe abrirlo en el contexto apropiado (nueva pestaña para enlaces externos).

**Validates: Requirements 6.4**

### Property 10: Responsive Layout Adaptation

*Para cualquier* tamaño de viewport, el sistema debe adaptar su layout para mantener la usabilidad y presentación apropiada del contenido.

**Validates: Requirements 8.1**

### Property 11: Image Loading Optimization

*Para cualquier* imagen cargada en el portfolio, el sistema debe optimizar su carga para entrega web (formato, compresión, lazy loading).

**Validates: Requirements 9.1**

### Property 12: Bundle Size Optimization

*Para cualquier* build de producción, el sistema debe minimizar el tamaño del bundle inicial utilizando la hidratación parcial de Astro.

**Validates: Requirements 9.3**

### Property 13: Image Format Optimization

*Para cualquier* imagen servida por el sistema, debe usar formatos apropiados y compresión adecuada para web.

**Validates: Requirements 9.4**

### Property 14: Component Interactivity Preservation

*Para cualquier* componente React que requiera interactividad (cambio de idioma, animaciones, navegación), el sistema debe mantener esa interactividad después de la hidratación.

**Validates: Requirements 10.3**

### Property 15: Styling Consistency

*Para cualquier* componente en el sistema, debe aplicar estilos consistentes utilizando las mismas clases de Tailwind y convenciones de diseño.

**Validates: Requirements 11.1**

### Property 16: Color Contrast Accessibility

*Para cualquier* combinación de texto y fondo en el sistema, debe mantener un ratio de contraste suficiente según las pautas WCAG (mínimo 4.5:1 para texto normal).

**Validates: Requirements 11.5**

### Property 17: Static Asset Path Correctness

*Para todos* los assets estáticos (iconos, imágenes, documentos), el sistema debe usar rutas de archivo correctas y referencias válidas que resuelvan a archivos existentes en el directorio public.

**Validates: Requirements 12.5**

## Manejo de Errores

### Estrategias de Manejo de Errores

#### 1. Assets Faltantes

**Problema**: Imágenes o iconos que no se encuentran en el directorio public.

**Estrategia**:
- Implementar fallbacks para imágenes faltantes
- Usar atributo `alt` descriptivo en todas las imágenes
- Considerar placeholder images para casos de error

```jsx
<img 
  src={imagePath} 
  alt={altText}
  onError={(e) => {
    e.target.src = '/placeholder.png';
  }}
/>
```

#### 2. Enlaces Rotos

**Problema**: Enlaces a redes sociales o recursos externos que pueden cambiar.

**Estrategia**:
- Validar enlaces durante el build
- Implementar manejo de errores en enlaces externos
- Usar `target="_blank"` y `rel="noopener noreferrer"` para seguridad

#### 3. Errores de Hidratación

**Problema**: Discrepancias entre el HTML generado estáticamente y el renderizado de React.

**Estrategia**:
- Asegurar que el contenido inicial sea idéntico entre servidor y cliente
- Evitar usar APIs del navegador durante el renderizado inicial
- Usar `useEffect` para código que depende del navegador

```jsx
useEffect(() => {
  // Código que depende del navegador
}, []);
```

#### 4. Responsive Design Breakpoints

**Problema**: Contenido que no se adapta correctamente en ciertos tamaños de pantalla.

**Estrategia**:
- Usar breakpoints estándar de Tailwind
- Probar en múltiples dispositivos y tamaños
- Implementar media queries cuando sea necesario

**Breakpoints de Tailwind**:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

#### 5. Internacionalización (i18n)

**Problema**: Contenido faltante o inconsistente entre idiomas.

**Estrategia**:
- Mantener un objeto centralizado de traducciones
- Validar que todas las claves tengan traducciones en ambos idiomas
- Usar fallback al idioma por defecto (español)

```javascript
const getText = (key, idioma) => {
  return TRANSLATIONS[key]?.[idioma ? 'en' : 'es'] || TRANSLATIONS[key]?.es || key;
};
```

### Logging y Debugging

Para desarrollo:
- Usar `console.log` para debugging (eliminar en producción)
- Implementar error boundaries en React para capturar errores de componentes
- Usar las herramientas de desarrollo de Astro para inspeccionar la generación estática

## Estrategia de Testing

### Enfoque Dual de Testing

El sistema requiere tanto pruebas unitarias como pruebas basadas en propiedades para asegurar correctitud completa:

- **Pruebas Unitarias**: Verifican ejemplos específicos, casos edge y condiciones de error
- **Pruebas de Propiedades**: Verifican propiedades universales a través de todos los inputs posibles
- Ambos tipos son complementarios y necesarios para cobertura comprehensiva

### Testing de Propiedades (Property-Based Testing)

**Biblioteca Recomendada**: `fast-check` para JavaScript/React

**Configuración**:
- Mínimo 100 iteraciones por prueba de propiedad
- Cada prueba debe referenciar su propiedad del documento de diseño
- Formato de tag: `Feature: portfolio-personal, Property {número}: {texto de propiedad}`

**Ejemplos de Pruebas de Propiedades**:

```javascript
import fc from 'fast-check';

// Feature: portfolio-personal, Property 4: Project Image Display
test('every project displays an image', () => {
  fc.assert(
    fc.property(
      fc.array(projectGenerator()),
      (projects) => {
        const rendered = render(<ProyectosyHabilidades projects={projects} />);
        projects.forEach(project => {
          const img = rendered.getByAltText(new RegExp(project.title));
          expect(img).toBeInTheDocument();
        });
      }
    ),
    { numRuns: 100 }
  );
});

// Feature: portfolio-personal, Property 17: Static Asset Path Correctness
test('all asset paths resolve to existing files', () => {
  fc.assert(
    fc.property(
      fc.constantFrom(...Object.values(ASSET_PATHS.icons)),
      (iconPath) => {
        const fullPath = path.join(process.cwd(), 'public', iconPath);
        expect(fs.existsSync(fullPath)).toBe(true);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Testing Unitario

**Framework Recomendado**: Vitest + React Testing Library

**Áreas de Enfoque**:

1. **Renderizado de Componentes**:
   - Verificar que cada componente renderiza sin errores
   - Verificar presencia de elementos clave
   - Verificar contenido bilingüe

2. **Interactividad**:
   - Cambio de idioma funciona correctamente
   - Enlaces de navegación funcionan
   - Animaciones se activan apropiadamente

3. **Casos Edge**:
   - Componentes con datos vacíos
   - Imágenes faltantes
   - Enlaces rotos

4. **Integración**:
   - Componentes se comunican correctamente
   - Estado se propaga correctamente
   - Astro integra React correctamente

**Ejemplos de Pruebas Unitarias**:

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Example: Welcome Component displays greeting
describe('Welcome Component', () => {
  it('displays greeting message with developer name', () => {
    render(<Welcome />);
    expect(screen.getByText(/Cristián/i)).toBeInTheDocument();
  });
  
  it('displays profile image', () => {
    render(<Welcome />);
    const img = screen.getByAltText(/foto/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/FotoGafas.jpg');
  });
});

// Example: Language toggle
describe('Language Toggle', () => {
  it('changes content when language is toggled', () => {
    render(<Header idioma={false} cambiarIdioma={() => {}} />);
    expect(screen.getByText(/Español/i)).toBeInTheDocument();
  });
});

// Example: CV download link
describe('CV Download', () => {
  it('provides accessible CV download link', () => {
    render(<Header idioma={false} cambiarIdioma={() => {}} />);
    const cvLink = screen.getByText(/Descargar CV/i);
    expect(cvLink).toHaveAttribute('href', '/CVCRISTIANRINCON.pdf');
    expect(cvLink).toHaveAttribute('target', '_blank');
  });
});

// Example: Mobile responsive layout
describe('Responsive Design', () => {
  it('displays single-column layout on mobile', () => {
    global.innerWidth = 375;
    render(<Welcome />);
    // Verificar clases de Tailwind para mobile
    const main = screen.getByRole('main');
    expect(main).toHaveClass('flex-col');
  });
});
```

### Testing de Accesibilidad

**Herramienta**: `@axe-core/react` o `jest-axe`

```javascript
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('Header component has no accessibility violations', async () => {
  const { container } = render(<Header idioma={false} cambiarIdioma={() => {}} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Testing Visual

**Herramienta**: Playwright o Cypress para E2E

- Capturar screenshots en diferentes viewports
- Verificar que las animaciones funcionan
- Probar navegación completa
- Verificar carga de imágenes

### Cobertura de Testing

**Objetivos**:
- Cobertura de código: >80%
- Todas las propiedades de correctitud implementadas
- Todos los componentes tienen pruebas unitarias
- Casos edge documentados y probados
- Pruebas de accesibilidad pasan

### Estrategia de Ejecución

1. **Desarrollo**: Ejecutar pruebas unitarias en watch mode
2. **Pre-commit**: Ejecutar todas las pruebas unitarias
3. **CI/CD**: Ejecutar pruebas unitarias + propiedades + E2E
4. **Pre-release**: Ejecutar suite completa incluyendo pruebas visuales

## Consideraciones de Implementación

### Performance

- Usar `client:visible` para lazy loading de componentes
- Optimizar imágenes con herramientas como Sharp o Astro Image
- Minimizar JavaScript enviado al cliente
- Aprovechar el caching del navegador para assets estáticos

### Accesibilidad

- Usar etiquetas semánticas HTML5
- Proporcionar textos alternativos para todas las imágenes
- Asegurar navegación por teclado
- Mantener ratios de contraste WCAG AA (4.5:1)
- Usar ARIA labels donde sea apropiado

### SEO

- Incluir meta tags apropiados en la página Astro
- Usar títulos descriptivos
- Proporcionar meta description
- Incluir Open Graph tags para redes sociales
- Generar sitemap.xml

### Mantenibilidad

- Centralizar configuración de contenido
- Usar constantes para rutas de assets
- Documentar componentes con JSDoc
- Mantener componentes pequeños y enfocados
- Seguir convenciones de nomenclatura consistentes

### Despliegue

- Build estático con `astro build`
- Desplegar en servicios como Vercel, Netlify, o GitHub Pages
- Configurar dominio personalizado
- Habilitar HTTPS
- Configurar analytics si es necesario

