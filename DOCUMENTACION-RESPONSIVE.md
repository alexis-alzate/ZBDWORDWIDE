# 📘 Documentación Técnica - 2BD Boutique

> **Proyecto**: Sitio web de presentación para 2BD Worldwide
> **Stack**: React 19 + Vite + Tailwind CSS
> **Versión**: 1.0.0
> **Última actualización**: Diciembre 2025

---

## 📑 Tabla de Contenidos

1. [Descripción del Proyecto](#-descripción-del-proyecto)
2. [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
3. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
4. [Estructura de Archivos](#-estructura-de-archivos)
5. [Arquitectura de Componentes](#-arquitectura-de-componentes)
6. [Sistema de Diseño Responsive](#-sistema-de-diseño-responsive)
7. [Patrón de Separación de Datos](#-patrón-de-separación-de-datos)
8. [Guía de Mantenimiento](#-guía-de-mantenimiento)
9. [Decisiones Técnicas](#-decisiones-técnicas)
10. [Instalación y Uso](#-instalación-y-uso)

---

## 🎯 Descripción del Proyecto

**2BD Boutique** es un sitio web de presentación para la marca de moda **2BD Worldwide**, que incluye tres colecciones principales:

- **2BC** (2 Be Classy)
- **2BD Blacklist**
- **C3M** (Colección Exclusiva)

### Características principales:

✅ **Diseño completamente responsive** (móvil, tablet, desktop)
✅ **Carrusel automático de imágenes** de fondo con transiciones suaves
✅ **Arquitectura modular y escalable** con separación de responsabilidades
✅ **Sistema de constantes centralizadas** para fácil mantenimiento
✅ **Optimizado para Tailwind JIT** (Just-In-Time compilation)

---

## 🏗️ Arquitectura del Proyecto

### Patrón de Diseño: **Component-Based Architecture**

El proyecto sigue una arquitectura basada en componentes con separación clara entre:

1. **Datos y Configuración** (`src/constants/`) - Single Source of Truth (SSOT)
2. **Presentación** (`src/components/`) - Componentes reutilizables de UI
3. **Layout y Composición** (`src/App.jsx`) - Estructura principal de la aplicación

```
┌─────────────────────────────────────────┐
│          BackgroundCarousel             │  ← Contexto visual (fondo)
│  ┌───────────────────────────────────┐  │
│  │           Header                  │  │  ← Cabecera fija
│  ├───────────────────────────────────┤  │
│  │                                   │  │
│  │      CollectionsSection           │  │  ← Contenido principal
│  │      (flex-1, centrado)           │  │
│  │                                   │  │
│  ├───────────────────────────────────┤  │
│  │           Footer                  │  │  ← Pie de página
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

---

## 💻 Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.2.0 | Librería UI para construcción de componentes |
| **Vite** | 7.2.4 | Build tool y dev server ultrarrápido |
| **Tailwind CSS** | 3.4.0 | Framework CSS utility-first |
| **ESLint** | 9.39.1 | Linter para mantener código consistente |

### ¿Por qué estas tecnologías?

- **React 19**: Última versión estable con mejoras de rendimiento
- **Vite**: Hot Module Replacement (HMR) instantáneo, builds optimizados
- **Tailwind CSS**: Desarrollo rápido, purge automático, JIT compilation
- **Sin TypeScript**: Proyecto pequeño que no requiere tipado estricto (escalable a TS en el futuro)

---

## 📂 Estructura de Archivos

```
2bdboutique/
├── public/
│   ├── logos/              # Logos de marca y colecciones
│   │   ├── logo1.PNG       # Logo principal (header)
│   │   ├── LOGO2.png       # Logo 2BC
│   │   ├── logo3.png       # Logo Blacklist
│   │   └── logo4.png       # Logo C3M
│   └── 2bd/                # Imágenes del carrusel (9 imágenes)
│       ├── 2BD1.JPG → 2BD9.JPG
│
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── BackgroundCarousel.jsx    # Carrusel de fondo animado
│   │   ├── CollectionCircle.jsx      # Círculo individual de colección
│   │   ├── CollectionsSection.jsx    # Sección principal de colecciones
│   │   ├── Header.jsx                # Cabecera del sitio
│   │   └── Footer.jsx                # Pie de página
│   │
│   ├── constants/          # Datos centralizados (SSOT)
│   │   └── data.js         # Textos, URLs, configuración
│   │
│   ├── App.css             # Estilos globales
│   ├── App.jsx             # Componente raíz y layout
│   ├── index.css           # Tailwind imports
│   └── main.jsx            # Entry point de React
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── DOCUMENTACION-RESPONSIVE.md    # Este archivo
```

---

## 🧩 Arquitectura de Componentes

### 1. **App.jsx** - Componente Raíz

**Responsabilidad**: Estructura del layout principal con Flexbox vertical.

```jsx
<BackgroundCarousel>
  <div className="flex min-h-screen flex-col justify-between">
    <Header />                    {/* Cabecera */}
    <main className="flex-1">    {/* Contenido centrado */}
      <CollectionsSection />
    </main>
    <Footer />                    {/* Pie de página */}
  </div>
</BackgroundCarousel>
```

**Decisiones clave**:
- `min-h-screen` → Altura mínima de 100vh
- `flex-col justify-between` → Distribuye Header, main y Footer verticalmente
- `flex-1` en `<main>` → Ocupa todo el espacio sobrante

---

### 2. **BackgroundCarousel.jsx** - Carrusel de Fondo

**Responsabilidad**: Gestiona el carrusel automático de imágenes de fondo.

**Características**:
- ✅ Rotación automática cada 5 segundos
- ✅ Transiciones de opacidad suaves (1 segundo)
- ✅ 3 sets de 3 imágenes cada uno
- ✅ Responsive: imágenes en columnas verticales en móvil, horizontales en desktop

**Configuración**:
```javascript
// src/constants/data.js
export const IMAGE_SETS = [
  ["/2bd/2BD1.JPG", "/2bd/2BD2.JPG", "/2bd/2BD3.JPG"],
  ["/2bd/2BD4.JPG", "/2bd/2BD5.JPG", "/2bd/2BD6.JPG"],
  ["/2bd/2BD7.JPG", "/2bd/2BD8.JPG", "/2bd/2BD9.JPG"]
];

export const CAROUSEL_CONFIG = {
  intervalo: 5000,           // 5 segundos
  duracionTransicion: 1000   // 1 segundo
};
```

**Lógica del Carrusel**:
1. Estado `currentSet` controla qué set de imágenes se muestra
2. `useEffect` ejecuta `setInterval` para cambiar automáticamente
3. Transiciones CSS con `opacity` y `transition-opacity`

---

### 3. **Header.jsx** - Cabecera

**Responsabilidad**: Mostrar logo principal y título de la marca.

**Elementos**:
- Título "2BD WORLDWIDE" (izquierda)
- Logo principal centrado absolutamente
- Banner negro con hover effect

**Variables de control**:
```javascript
const logoSize = "w-48 h-24 md:w-64 md:h-32 lg:w-96 lg:h-48";
const bannerAltura = "h-24";
const textoPosY = "-mt-[0px]";      // Posición vertical del texto
const logoCentralPosY = "-mt-[0px]"; // Posición vertical del logo
```

**Técnica de centrado**:
```jsx
<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <img src={logoSrc} alt="Logo" />
</div>
```

---

### 4. **CollectionsSection.jsx** - Sección Principal

**Responsabilidad**: Mostrar las tres colecciones con sus logos.

**Estructura**:
```
┌─────────────────────────┐
│      COLECCIONES        │  ← Título
├─────────────────────────┤
│  ○     ○     ○          │  ← Logos circulares
│ 2BC  BLACKLIST  C3M     │
└─────────────────────────┘
```

**Variables de control**:
```javascript
const separacionSuperior = "mt-12 sm:mt-16 lg:mt-20";
const tituloSize = "text-2xl sm:text-3xl lg:text-4xl";
const espacioLogos = "gap-6 sm:gap-8 lg:gap-12";
const paddingSeccion = "px-6 py-12 sm:px-10 lg:px-20";
```

**Flexbox Responsive**:
```jsx
<div className="flex w-full flex-wrap items-center justify-center gap-6">
  <CollectionCircle logo={...} name="2BC" />
  <CollectionCircle logo={...} name="2BD BLACKLIST" />
  <CollectionCircle logo={...} name="C3M" />
</div>
```

---

### 5. **CollectionCircle.jsx** - Círculo de Colección

**Responsabilidad**: Mostrar un logo circular con hover effect.

**Efectos visuales**:
- ✅ Border circular con gradiente dorado
- ✅ Escala aumenta en hover (`scale-110`)
- ✅ Rotación suave en hover (`rotate-6`)
- ✅ Transición animada de 300ms

---

### 6. **Footer.jsx** - Pie de Página

**Responsabilidad**: Mostrar eslogan y mensajes de bienvenida.

**Contenido**:
```
MÁS QUE UNA
   MARCA

Somos un universo con identidad.
Bienvenido a 2BD WORLDWIDE
```

**Variables de control**:
```javascript
const margenSuperior = "mt-12 sm:mt-16";
const esloganSize = "text-2xl sm:text-3xl";
const textoSize = "text-xs sm:text-sm md:text-base";
const paddingFooter = "px-6 py-8";
```

---

## 📱 Sistema de Diseño Responsive

### Breakpoints de Tailwind CSS

| Breakpoint | Mínimo | Dispositivos |
|------------|--------|--------------|
| `(default)` | 0px | Móviles pequeños |
| `sm:` | 640px | Móviles grandes / Tablets verticales |
| `md:` | 768px | Tablets horizontales |
| `lg:` | 1024px | Laptops / Desktops pequeños |
| `xl:` | 1280px | Desktops medianos |
| `2xl:` | 1536px | Desktops grandes |

### Estrategia Mobile-First

Todas las clases sin prefijo se aplican primero a móviles, luego se sobrescriben para pantallas más grandes:

```javascript
// ❌ NO HACER (Desktop-First)
const titulo = "text-4xl md:text-2xl";

// ✅ CORRECTO (Mobile-First)
const titulo = "text-2xl md:text-3xl lg:text-4xl";
```

### Patrones Responsive Usados

#### 1. **Tipografía Escalable**
```javascript
// Texto pequeño en móvil, grande en desktop
const tituloSize = "text-2xl sm:text-3xl lg:text-4xl";
```

#### 2. **Espaciado Adaptativo**
```javascript
// Menos margen en móvil, más en desktop
const separacion = "mt-12 sm:mt-16 lg:mt-20";
```

#### 3. **Padding Responsivo**
```javascript
// Menos padding en móvil, más en desktop
const padding = "px-6 py-12 sm:px-10 lg:px-20";
```

#### 4. **Layout Flex Adaptativo**
```javascript
// Columnas en móvil, filas en desktop
className="flex flex-col md:flex-row"
```

#### 5. **Tamaños de Imagen**
```javascript
// Logo pequeño en móvil, grande en desktop
const logoSize = "w-48 h-24 md:w-64 md:h-32 lg:w-96 lg:h-48";
```

---

## 🗂️ Patrón de Separación de Datos

### Concepto: Single Source of Truth (SSOT)

**Problema**: Código con strings duplicados, difícil de mantener.

```jsx
// ❌ MAL: Datos mezclados con presentación
<h1>2BD WORLDWIDE</h1>
<img src="/logos/logo1.PNG" />
<p>Bienvenido a 2BD WORLDWIDE</p>
```

**Solución**: Centralizar datos en `src/constants/data.js`.

```javascript
// ✅ BIEN: Datos centralizados
export const TEXTOS = {
  header: { titulo: "2BD WORLDWIDE" },
  footer: { bienvenida: "Bienvenido a 2BD WORLDWIDE" }
};

export const LOGOS = {
  principal: "/logos/logo1.PNG"
};
```

### Ventajas de este Patrón

| Ventaja | Explicación |
|---------|-------------|
| **Mantenibilidad** | Cambiar un texto o imagen → solo editas `data.js` |
| **Escalabilidad** | Fácil agregar i18n (internacionalización) |
| **Reutilización** | Múltiples componentes pueden usar los mismos datos |
| **Menos errores** | No más typos en rutas duplicadas |
| **Separación de responsabilidades** | Datos ≠ Presentación |

### Estructura de `data.js`

```javascript
// ========================================
// 🖼️ RUTAS DE LOGOS
// ========================================
export const LOGOS = {
  principal: "/logos/logo1.PNG",
  colecciones: {
    bc2: "/logos/LOGO2.png",
    blacklist: "/logos/logo3.png",
    c3m: "/logos/logo4.png"
  }
};

// ========================================
// 📝 TEXTOS DEL SITIO
// ========================================
export const TEXTOS = {
  header: { titulo: "2BD WORDLWIDE" },
  footer: {
    identidad: "Somos un universo con identidad.",
    bienvenida: "Bienvenido a 2BD WORLWIDE"
  },
  colecciones: {
    titulo: "Colecciones",
    eslogan: {
      linea1: "MÁS QUE UNA",
      linea2: "MARCA"
    },
    nombres: {
      bc2: "2BC",
      blacklist: "2BD BLACKLIST",
      c3m: "C3M"
    }
  }
};

// ========================================
// 🎨 IMÁGENES DEL CARRUSEL
// ========================================
export const IMAGE_SETS = [
  ["/2bd/2BD1.JPG", "/2bd/2BD2.JPG", "/2bd/2BD3.JPG"],
  ["/2bd/2BD4.JPG", "/2bd/2BD5.JPG", "/2bd/2BD6.JPG"],
  ["/2bd/2BD7.JPG", "/2bd/2BD8.JPG", "/2bd/2BD9.JPG"]
];

// ========================================
// 🔧 CONFIGURACIÓN
// ========================================
export const CAROUSEL_CONFIG = {
  intervalo: 5000,
  duracionTransicion: 1000
};
```

### Cómo Usar los Datos en Componentes

```jsx
// Importar solo lo que necesitas
import { LOGOS, TEXTOS } from "../constants/data";

export default function Header({
  logoSrc = LOGOS.principal,      // Valor por defecto desde data.js
  titulo = TEXTOS.header.titulo
}) {
  return (
    <header>
      <h1>{titulo}</h1>
      <img src={logoSrc} alt="Logo" />
    </header>
  );
}
```

---

## 🛠️ Guía de Mantenimiento

### Cambiar Textos

**Archivo**: [src/constants/data.js](src/constants/data.js)

```javascript
// Cambiar título del header
export const TEXTOS = {
  header: {
    titulo: "NUEVO TÍTULO AQUÍ" // 👈 Edita esto
  }
};
```

### Cambiar Logos o Imágenes

1. Subir nueva imagen a `public/logos/` o `public/2bd/`
2. Actualizar ruta en `data.js`:

```javascript
export const LOGOS = {
  principal: "/logos/nuevo-logo.png" // 👈 Nueva ruta
};
```

### Ajustar Diseño Responsive

**Archivo**: Cada componente tiene variables de control al inicio.

```javascript
// Ejemplo en CollectionsSection.jsx
const tituloSize = "text-2xl sm:text-3xl lg:text-4xl";
//                  ↑móvil   ↑tablet     ↑desktop
```

### Modificar Velocidad del Carrusel

**Archivo**: [src/constants/data.js](src/constants/data.js)

```javascript
export const CAROUSEL_CONFIG = {
  intervalo: 3000,           // 👈 Cambiar a 3 segundos
  duracionTransicion: 1500   // 👈 Transición más lenta
};
```

### Agregar Nuevas Colecciones

**Paso 1**: Agregar logo y nombre en `data.js`:

```javascript
export const LOGOS = {
  colecciones: {
    bc2: "/logos/LOGO2.png",
    blacklist: "/logos/logo3.png",
    c3m: "/logos/logo4.png",
    nuevaColeccion: "/logos/nueva.png" // 👈 Agregar aquí
  }
};

export const TEXTOS = {
  colecciones: {
    nombres: {
      bc2: "2BC",
      blacklist: "2BD BLACKLIST",
      c3m: "C3M",
      nuevaColeccion: "NUEVA" // 👈 Agregar aquí
    }
  }
};
```

**Paso 2**: Agregar componente en `CollectionsSection.jsx`:

```jsx
<CollectionCircle
  logo={LOGOS.colecciones.nuevaColeccion}
  name={TEXTOS.colecciones.nombres.nuevaColeccion}
/>
```

---

## 🧠 Decisiones Técnicas

### ¿Por qué NO usamos position: absolute para el layout?

**Problema con `absolute`**:
- Difícil de mantener responsive
- Requiere cálculos manuales de posición
- No se adapta bien a diferentes tamaños de pantalla

**Solución con Flexbox**:
```jsx
<div className="flex min-h-screen flex-col justify-between">
  <Header />
  <main className="flex-1">...</main>  {/* ← Ocupa espacio restante */}
  <Footer />
</div>
```

**Ventajas**:
- ✅ Centrado automático
- ✅ Altura adaptativa
- ✅ Footer siempre al fondo
- ✅ Responsive sin media queries manuales

---

### ¿Por qué clases Tailwind como strings literales?

**Correcto**:
```javascript
const titulo = "text-2xl sm:text-3xl lg:text-4xl";
<h1 className={titulo}>Título</h1>
```

**Incorrecto**:
```javascript
// ❌ Tailwind JIT no detectará estas clases
const size = "2xl";
<h1 className={`text-${size}`}>Título</h1>
```

**Razón**: El compilador JIT de Tailwind analiza el código estáticamente. Debe encontrar cadenas completas como `"text-2xl"`, no plantillas dinámicas.

**Referencia**: [Tailwind Docs - Dynamic class names](https://tailwindcss.com/docs/content-configuration#dynamic-class-names)

---

### ¿Por qué NO usamos CSS Modules o Styled Components?

**Decisión**: Tailwind CSS con utility classes inline.

**Ventajas**:
- ✅ Desarrollo más rápido (no cambiar entre archivos)
- ✅ Purge automático de clases no usadas
- ✅ Menos bundle size
- ✅ Responsive directo con prefijos (`sm:`, `md:`, etc.)
- ✅ No hay naming conflicts (BEM, OOCSS, etc.)

**Desventajas**:
- ⚠️ Clases largas en JSX (solucionado con variables de control)
- ⚠️ Curva de aprendizaje de Tailwind

---

### ¿Por qué React 19 sin TypeScript?

**Decisión**: JavaScript puro para este proyecto.

**Razones**:
- Proyecto pequeño (6 componentes)
- No hay lógica de negocio compleja
- Desarrollo más rápido sin configurar TS
- Escalable a TypeScript en el futuro si crece el proyecto

**Cuándo migrar a TypeScript**:
- Cuando el equipo crezca (3+ desarrolladores)
- Cuando se agregue gestión de estado compleja (Redux, Zustand)
- Cuando se integren APIs externas con tipos complejos

---

### ¿Por qué Vite en lugar de Create React App?

| Característica | Vite | Create React App |
|----------------|------|------------------|
| Velocidad dev server | ⚡ Instantáneo | 🐌 ~30s |
| Hot Module Replacement | ⚡ <50ms | 🐌 1-3s |
| Build production | ⚡ Rápido (Rollup) | 🐌 Lento (Webpack) |
| Tamaño bundle | ✅ Optimizado | ❌ Más pesado |
| Configuración | ✅ Mínima | ❌ Compleja |

**Decisión**: Vite para mejor DX (Developer Experience).

---

## 📦 Instalación y Uso

### Requisitos Previos

- Node.js >= 18.x
- npm >= 9.x o pnpm >= 8.x

### Instalación

```bash
# Clonar el repositorio
git clone <repo-url>
cd 2bdboutique

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo (localhost:5173)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint
```

### Build para Producción

```bash
npm run build
```

Genera carpeta `dist/` lista para desplegar en cualquier hosting estático:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

---

## 🚀 Posibles Mejoras Futuras

### Corto Plazo
- [ ] Animaciones con Framer Motion
- [ ] Lazy loading de imágenes
- [ ] Optimización de imágenes (WebP, AVIF)
- [ ] SEO: meta tags, Open Graph, sitemap.xml

### Mediano Plazo
- [ ] Internacionalización (i18n) - Español/Inglés
- [ ] Modo oscuro / claro
- [ ] Página de cada colección con detalles
- [ ] Formulario de contacto
- [ ] Integración con redes sociales

### Largo Plazo
- [ ] Migración a TypeScript
- [ ] E-commerce completo (carrito, pagos)
- [ ] Panel de administración (CMS)
- [ ] Testing (Vitest + React Testing Library)
- [ ] Storybook para documentar componentes

---

## 📚 Referencias y Recursos

- [React 19 Docs](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [React Patterns](https://reactpatterns.com/)

---

## 📝 Changelog

### [1.0.0] - Diciembre 2025

#### ✨ Agregado
- Arquitectura inicial del proyecto
- Componente BackgroundCarousel con rotación automática
- Sistema de constantes centralizadas en `data.js`
- Layout responsive con Flexbox
- Componentes Header, Footer, CollectionsSection
- Variables de control en cada componente

#### 🔧 Mejorado
- Diseño responsive Mobile-First
- Separación de datos y presentación
- Documentación completa del código

#### 🐛 Corregido
- Footer ahora se mantiene al fondo con `flex-1`
- Clases Tailwind como strings literales para JIT
- Centrado vertical del contenido principal

---

## 👥 Equipo

**Desarrollador**: [Tu nombre]
**Diseño**: 2BD Worldwide
**Documentación**: Claude (Asistente AI)

---

## 📄 Licencia

Proyecto privado - 2BD Worldwide © 2025

---

**¿Dudas o sugerencias?** Abrí un issue en el repositorio o contactá al equipo de desarrollo.
