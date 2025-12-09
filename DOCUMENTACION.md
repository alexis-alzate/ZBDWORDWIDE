# 🛍️ 2BD BOUTIQUE - Documentación del Proyecto

## 📋 Índice
- [Descripción General](#-descripción-general)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Componentes](#-componentes)
- [Instalación y Uso](#-instalación-y-uso)
- [Configuración](#-configuración)
- [Backend WordPress](#-backend-wordpress)

---

## 🎯 Descripción General

**2BD BOUTIQUE** es una tienda de ropa urbana en línea que presenta las colecciones de la marca **2BD WORLWIDE**. El sitio web está construido con React para el frontend y WordPress como backend para la gestión de contenidos y productos.

### Características principales:
- ✨ Carrusel de fondo animado con imágenes de las colecciones
- 🎨 Interfaz moderna y minimalista
- 📱 Diseño responsivo con Tailwind CSS
- 🔄 Transiciones suaves y animaciones
- 🛒 Integración con WordPress para gestión de productos

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.2.0** - Framework de JavaScript para interfaces de usuario
- **Vite 7.2.4** - Build tool y dev server ultra rápido
- **Tailwind CSS 3.4.0** - Framework de CSS utility-first
- **PostCSS & Autoprefixer** - Procesamiento de CSS

### Development Tools
- **ESLint** - Linter para mantener calidad del código
- **@vitejs/plugin-react** - Plugin de React para Vite

### Backend (Próximamente)
- **WordPress** - CMS para gestión de productos y contenidos
- **REST API** - Para comunicación entre React y WordPress

---

## 📁 Estructura del Proyecto

```
2bdboutique/
│
├── public/                      # Archivos estáticos
│   ├── 2bd/                    # Imágenes del carrusel
│   │   ├── 2BD1.JPG
│   │   ├── 2BD2.JPG
│   │   └── ... (hasta 2BD9.JPG)
│   │
│   └── logos/                  # Logos de las colecciones
│       ├── logo1.png
│       ├── LOGO2.png
│       ├── logo3.png
│       └── logo4.png
│
├── src/                        # Código fuente
│   ├── components/            # Componentes React
│   │   ├── BackgroundCarousel.jsx
│   │   ├── CollectionCircle.jsx
│   │   ├── CollectionsSection.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   │
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
│
├── index.html                # HTML base
├── package.json              # Dependencias del proyecto
├── vite.config.js            # Configuración de Vite
└── tailwind.config.js        # Configuración de Tailwind

```

---

## 🧩 Componentes

### 1. **BackgroundCarousel.jsx**
**Propósito:** Crea un carrusel de fondo animado con sets de 3 imágenes que cambian cada 5 segundos.

**Características:**
- Transiciones suaves de opacidad (fade in/out)
- Loop infinito de imágenes
- Organizado en sets de 3 imágenes (pantalla dividida en tercios)
- Usa React Hooks: `useState` y `useEffect`

**Props:**
- `children` - Contenido que se renderiza sobre el carrusel

**Cómo funciona:**
```javascript
// Define sets de 3 imágenes
const imageSets = [
  ["/2bd/2BD1.JPG", "/2bd/2BD2.JPG", "/2bd/2BD3.JPG"],
  ["/2bd/2BD4.JPG", "/2bd/2BD5.JPG", "/2bd/2BD6.JPG"],
  // ...más sets
];

// Cambia automáticamente cada 5 segundos
setInterval(() => {
  setIndex((prev) => (prev + 1) % imageSets.length);
}, 5000);
```

**Clases Tailwind clave:**
- `transition-opacity duration-1000` - Animación suave de 1 segundo
- `opacity-100 / opacity-0` - Controla visibilidad

---

### 2. **Header.jsx**
**Propósito:** Encabezado principal del sitio con el branding de 2BD WORLWIDE.

**Estructura:**
- **Izquierda:** Título "2BD WORDLWIDE"
- **Centro:** Logo principal (posicionado absolutamente)
- **Derecha:** Logo secundario en círculo blanco

**Técnicas CSS destacadas:**
```css
/* Centrado absoluto perfecto */
.absolute.left-1/2.top-1/2.transform.-translate-x-1/2.-translate-y-1/2
```

**Props:** Ninguna

---

### 3. **CollectionsSection.jsx**
**Propósito:** Sección central que muestra las colecciones disponibles.

**Contenido:**
- Título "Colecciones"
- 2 círculos interactivos (C3M y 2BC)
- Eslogan "MÁS QUE UNA MARCA"

**Props:** Ninguna

**Componentes hijos:**
- Utiliza `CollectionCircle` para cada colección

---

### 4. **CollectionCircle.jsx**
**Propósito:** Círculo clickeable que representa una colección.

**Props:**
- `logo` (string) - Ruta de la imagen del logo
- `name` (string) - Nombre de la colección (para alt text)

**Características:**
- Efecto hover: Escala 110% al pasar el mouse
- Sombra pronunciada (`shadow-2xl`)
- Cursor pointer para indicar interactividad
- Transición suave con `transition-transform`

**Ejemplo de uso:**
```jsx
<CollectionCircle logo="/logos/logo3.png" name="C3M" />
```

---

### 5. **Footer.jsx**
**Propósito:** Pie de página con el mensaje de bienvenida.

**Contenido:**
- "Somos un universo con identidad."
- "Bienvenido a 2BD WORLWIDE" (en negrita)

**Props:** Ninguna

**Detalle técnico:**
- Usa `drop-shadow` personalizado para mejorar legibilidad sobre cualquier fondo

---

## 🚀 Instalación y Uso

### Prerequisitos
- Node.js 18+ instalado
- npm o yarn

### Pasos de instalación:

```bash
# 1. Clonar el repositorio (si aplica)
git clone <url-del-repo>
cd 2bdboutique

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# El servidor correrá en http://localhost:5173
```

### Scripts disponibles:

```bash
# Desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Linter
npm run lint
```

---

## ⚙️ Configuración

### Tailwind CSS
El archivo `tailwind.config.js` está configurado para escanear todos los archivos JSX/TSX:

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}
```

### Vite
Configuración mínima en `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### PostCSS
Integración con Tailwind mediante `postcss.config.js`.

---

## 🔌 Backend WordPress

### Estado actual:
⚠️ **En desarrollo** - El backend de WordPress está pendiente de integración.

### Plan de integración:

1. **Configuración de WordPress:**
   - Instalar WordPress en servidor
   - Configurar WooCommerce para productos
   - Habilitar REST API

2. **Endpoints necesarios:**
   ```
   GET /wp-json/wc/v3/products        - Listar productos
   GET /wp-json/wc/v3/products/:id    - Producto individual
   GET /wp-json/wp/v2/media           - Imágenes
   ```

3. **Autenticación:**
   - Usar OAuth 1.0a o JWT tokens
   - Configurar CORS en WordPress

4. **Integración en React:**
   ```javascript
   // Ejemplo futuro de fetch
   const fetchProducts = async () => {
     const response = await fetch('https://tu-wordpress.com/wp-json/wc/v3/products');
     const data = await response.json();
     return data;
   };
   ```

---

## 📝 Notas para el Desarrollador

### Convenciones de código:
- ✅ Componentes funcionales con hooks
- ✅ Comentarios JSDoc en cada componente
- ✅ Tailwind CSS para todos los estilos
- ✅ Props tipadas con comentarios

### Próximos pasos:
- [ ] Integrar WordPress backend
- [ ] Añadir sistema de routing (React Router)
- [ ] Implementar páginas de productos
- [ ] Carrito de compras
- [ ] Sistema de autenticación
- [ ] Pasarela de pago

### Performance:
- Vite proporciona Hot Module Replacement (HMR) ultra rápido
- Las imágenes deben optimizarse antes del deploy
- Considerar lazy loading para imágenes del carrusel

---

## 📞 Contacto y Soporte

Para cualquier duda o problema con el proyecto, contactar al desarrollador.

---

## 📄 Licencia

Proyecto privado desarrollado para cliente. Todos los derechos reservados a **2BD WORLWIDE**.

---

**Última actualización:** Diciembre 2024
**Desarrollado con ❤️ para 2BD WORLWIDE**
