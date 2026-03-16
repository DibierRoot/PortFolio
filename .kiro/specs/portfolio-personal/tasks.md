# Plan de Implementación: Portfolio Personal

## Descripción General

Este plan implementa un portfolio personal usando Astro como framework principal y React para componentes interactivos. El sistema incluye 5 componentes React principales (Welcome, Header, SobreMi, ProyectosyHabilidades, Contacto) integrados en una página Astro con diseño responsivo, sistema bilingüe español/inglés, y optimización de rendimiento mediante hidratación parcial.

## Tareas

- [x] 1. Configurar estructura del proyecto y dependencias
  - Verificar que Astro 4.x y React 18.x estén instalados
  - Verificar que Tailwind CSS 3.x esté configurado
  - Instalar Framer Motion para animaciones
  - Instalar fast-check para property-based testing
  - Instalar Vitest y React Testing Library para testing unitario
  - Crear estructura de directorios: `src/components/React/`
  - _Requisitos: 10.1, 10.2_

- [x] 2. Implementar componente Welcome (contenedor raíz)
  - [x] 2.1 Crear componente Welcome con gestión de estado de idioma
    - Implementar `useState` para gestionar idioma (false = español, true = inglés)
    - Implementar función `cambiarIdioma()` para alternar idioma
    - Crear estructura JSX con Header, main, y footer
    - Pasar props de idioma y cambiarIdioma a componentes hijos
    - _Requisitos: 1.1, 1.2, 1.3, 1.4_
  
  - [ ]* 2.2 Escribir prueba de propiedad para Welcome
    - **Property 14: Component Interactivity Preservation**
    - **Valida: Requisitos 10.3**
  
  - [ ]* 2.3 Escribir pruebas unitarias para Welcome
    - Verificar renderizado sin errores
    - Verificar que muestra nombre del desarrollador
    - Verificar que muestra imagen de perfil
    - Verificar cambio de idioma funciona correctamente
    - _Requisitos: 1.1, 1.2, 1.3_

- [x] 3. Implementar componente Header
  - [x] 3.1 Crear componente Header con navegación y bienvenida
    - Implementar barra de navegación con enlaces a secciones
    - Implementar selector de idioma (botón que llama a cambiarIdioma)
    - Mostrar mensaje de bienvenida personalizado bilingüe
    - Mostrar descripción del rol profesional bilingüe
    - Agregar botón de descarga de CV (`/CVCRISTIANRINCON.pdf`)
    - Agregar enlaces a redes sociales (GitHub, LinkedIn, Instagram)
    - Mostrar imagen de perfil (`/FotoGafas.jpg`)
    - Implementar navegación smooth scroll a secciones
    - _Requisitos: 2.1, 2.2, 7.1, 7.2, 7.3, 7.4_
  
  - [ ]* 3.2 Escribir pruebas de propiedades para Header
    - **Property 1: Navigation Link Scroll Behavior**
    - **Valida: Requisitos 2.2**
    - **Property 2: Header Accessibility During Scroll**
    - **Valida: Requisitos 2.3**
    - **Property 3: Active Section Indication**
    - **Valida: Requisitos 2.4**
  
  - [ ]* 3.3 Escribir pruebas unitarias para Header
    - Verificar renderizado de enlaces de navegación
    - Verificar botón de descarga de CV con atributos correctos
    - Verificar enlaces a redes sociales
    - Verificar imagen de perfil con ruta correcta
    - Verificar contenido bilingüe
    - _Requisitos: 2.1, 7.1, 7.2, 7.3_

- [ ] 4. Implementar componente SobreMi
  - [ ] 4.1 Crear componente SobreMi con información personal
    - Mostrar iconos de tecnologías principales (HTML5, CSS3, JavaScript)
    - Rutas: `/HTML5Icon.svg`, `/CSS3Icon.svg`, `/JSIcon.svg`
    - Mostrar título de sección bilingüe
    - Mostrar descripción personal y profesional bilingüe
    - Aplicar diseño responsivo con Tailwind CSS
    - _Requisitos: 3.1, 3.2, 3.3, 3.4_
  
  - [ ]* 4.2 Escribir pruebas unitarias para SobreMi
    - Verificar renderizado de iconos de tecnologías
    - Verificar contenido bilingüe
    - Verificar diseño responsivo (clases Tailwind)
    - _Requisitos: 3.1, 3.2, 3.4_

- [ ] 5. Implementar componente ProyectosyHabilidades
  - [ ] 5.1 Crear estructura de datos de proyectos
    - Definir array de proyectos con: title, description (bilingüe), image, githubUrl, technologies
    - Proyecto 1: OcoboShop (`/PortadaOcoboShop.png`, React/PHP/MySQL)
    - Proyecto 2: PortFolio (`/PortadaPortFolio.png`, Astro/React)
    - Definir objeto de habilidades por categorías (lenguajes, frameworks, herramientas)
    - _Requisitos: 4.1, 5.1_
  
  - [ ] 5.2 Implementar sección de proyectos con animaciones
    - Renderizar lista de proyectos con Project_Cards
    - Mostrar imagen, título, descripción bilingüe para cada proyecto
    - Mostrar tecnologías usadas con iconos
    - Agregar enlace a GitHub para cada proyecto
    - Implementar animaciones con Framer Motion (initial, whileInView, viewport)
    - Asegurar dimensiones y aspect ratio apropiados para imágenes
    - _Requisitos: 4.1, 4.2, 4.3, 4.4, 4.5_
  
  - [ ] 5.3 Implementar sección de habilidades técnicas
    - Renderizar grid de Technology_Icons
    - Incluir iconos para: Astro, React, JavaScript, HTML5, CSS3, Tailwind, Vite, PHP, MySQL, Git, GitHub, npm
    - Rutas: `/AstroIcon.svg`, `/ReactIcon.svg`, etc.
    - Organizar iconos en layout visual claro
    - _Requisitos: 5.1, 5.2, 5.3, 5.4_
  
  - [ ]* 5.4 Escribir pruebas de propiedades para ProyectosyHabilidades
    - **Property 4: Project Image Display**
    - **Valida: Requisitos 4.2**
    - **Property 5: Project Information Completeness**
    - **Valida: Requisitos 4.3**
    - **Property 6: Project Technologies Display**
    - **Valida: Requisitos 4.4**
    - **Property 7: Project Image Dimensions**
    - **Valida: Requisitos 4.5**
    - **Property 8: Technology Icon Mapping**
    - **Valida: Requisitos 5.2**
  
  - [ ]* 5.5 Escribir pruebas unitarias para ProyectosyHabilidades
    - Verificar renderizado de todos los proyectos
    - Verificar información completa por proyecto
    - Verificar renderizado de todos los iconos de tecnologías
    - Verificar animaciones de Framer Motion
    - Verificar contenido bilingüe
    - _Requisitos: 4.1, 4.2, 4.3, 5.1, 5.2_

- [ ] 6. Implementar componente Contacto
  - [ ] 6.1 Crear componente Contacto con información y enlaces
    - Mostrar información de contacto (email, teléfono)
    - Agregar enlaces a redes sociales: LinkedIn, GitHub, WhatsApp, Instagram
    - URLs: LinkedIn, GitHub, WhatsApp (wa.me/573102955230), Instagram
    - Configurar enlaces con target="_blank" y rel="noopener noreferrer"
    - Implementar animaciones con Framer Motion
    - Aplicar formato claro y accesible
    - _Requisitos: 6.1, 6.2, 6.3, 6.4_
  
  - [ ]* 6.2 Escribir prueba de propiedad para Contacto
    - **Property 9: Contact Link Behavior**
    - **Valida: Requisitos 6.4**
  
  - [ ]* 6.3 Escribir pruebas unitarias para Contacto
    - Verificar renderizado de información de contacto
    - Verificar enlaces a redes sociales con atributos correctos
    - Verificar contenido bilingüe
    - _Requisitos: 6.1, 6.2, 6.3, 6.4_

- [ ] 7. Checkpoint - Verificar componentes React
  - Asegurar que todos los componentes renderizan sin errores
  - Verificar que el sistema bilingüe funciona en todos los componentes
  - Preguntar al usuario si hay dudas o ajustes necesarios

- [ ] 8. Integrar componentes React en página Astro
  - [ ] 8.1 Crear o actualizar página index.astro
    - Importar componente Welcome
    - Configurar hidratación con client:load para Welcome
    - Configurar meta tags para SEO (title, description, Open Graph)
    - Incluir favicon y logo
    - _Requisitos: 10.1, 10.2, 10.4_
  
  - [ ] 8.2 Configurar estrategia de hidratación
    - Welcome y Header: hidratación inmediata
    - SobreMi, ProyectosyHabilidades, Contacto: client:visible
    - Verificar que la hidratación parcial funciona correctamente
    - _Requisitos: 10.2, 10.3, 9.3_
  
  - [ ]* 8.3 Escribir pruebas de integración Astro-React
    - Verificar que componentes React se integran correctamente
    - Verificar que la hidratación funciona
    - Verificar que el estado se propaga correctamente
    - _Requisitos: 10.1, 10.2, 10.3_

- [ ] 9. Implementar diseño responsivo y estilos
  - [ ] 9.1 Aplicar estilos Tailwind CSS consistentes
    - Aplicar clases Tailwind a todos los componentes
    - Implementar color scheme y tipografía cohesivos
    - Agregar transiciones y animaciones suaves
    - Asegurar contraste de color suficiente (WCAG AA 4.5:1)
    - _Requisitos: 11.1, 11.2, 11.3, 11.4, 11.5_
  
  - [ ] 9.2 Implementar breakpoints responsivos
    - Mobile (< 640px): layout de una columna
    - Tablet (640px - 1024px): optimizar espaciado y tamaños
    - Desktop (> 1024px): utilizar espacio disponible efectivamente
    - Verificar usabilidad en todos los viewports
    - _Requisitos: 8.1, 8.2, 8.3, 8.4, 8.5_
  
  - [ ]* 9.3 Escribir pruebas de propiedades para diseño responsivo
    - **Property 10: Responsive Layout Adaptation**
    - **Valida: Requisitos 8.1**
    - **Property 15: Styling Consistency**
    - **Valida: Requisitos 11.1**
    - **Property 16: Color Contrast Accessibility**
    - **Valida: Requisitos 11.5**
  
  - [ ]* 9.4 Escribir pruebas de accesibilidad
    - Usar jest-axe o @axe-core/react
    - Verificar que no hay violaciones de accesibilidad
    - Verificar navegación por teclado
    - Verificar textos alternativos en imágenes
    - _Requisitos: 11.5_

- [ ] 10. Optimizar carga de recursos y rendimiento
  - [ ] 10.1 Configurar optimización de imágenes
    - Implementar lazy loading para imágenes
    - Usar formatos apropiados y compresión
    - Agregar atributos width y height para evitar layout shift
    - Implementar fallbacks para imágenes faltantes
    - _Requisitos: 9.1, 9.4_
  
  - [ ] 10.2 Organizar assets estáticos en directorio public
    - Verificar que todos los iconos están en `/public/`
    - Verificar que todas las imágenes están en `/public/`
    - Verificar que el CV está en `/public/`
    - Verificar que favicon y logo están en `/public/`
    - _Requisitos: 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [ ]* 10.3 Escribir pruebas de propiedades para optimización
    - **Property 11: Image Loading Optimization**
    - **Valida: Requisitos 9.1**
    - **Property 12: Bundle Size Optimization**
    - **Valida: Requisitos 9.3**
    - **Property 13: Image Format Optimization**
    - **Valida: Requisitos 9.4**
    - **Property 17: Static Asset Path Correctness**
    - **Valida: Requisitos 12.5**
  
  - [ ]* 10.4 Escribir pruebas unitarias para manejo de errores
    - Verificar fallbacks para imágenes faltantes
    - Verificar manejo de enlaces rotos
    - Verificar comportamiento con datos vacíos
    - _Requisitos: 9.1, 12.5_

- [ ] 11. Checkpoint final - Verificar implementación completa
  - Ejecutar todas las pruebas (unitarias y de propiedades)
  - Verificar que todos los requisitos están cubiertos
  - Probar en diferentes navegadores y dispositivos
  - Verificar rendimiento y tiempos de carga
  - Preguntar al usuario si hay ajustes finales necesarios

## Notas

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia requisitos específicos para trazabilidad
- Los checkpoints aseguran validación incremental
- Las pruebas de propiedades validan propiedades universales de correctitud
- Las pruebas unitarias validan ejemplos específicos y casos edge
- El sistema usa JavaScript/JSX como especificado en el diseño técnico
- La implementación aprovecha la hidratación parcial de Astro para optimizar rendimiento
