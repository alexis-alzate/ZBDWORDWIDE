# 📚 Apuntes de React y Tailwind CSS

## 🎯 Índice
- [Variables y Template Literals](#variables-y-template-literals)
- [className vs ID](#classname-vs-id)
- [Cómo funcionan las clases en React](#cómo-funcionan-las-clases-en-react)
- [Tailwind CSS - Guía Rápida](#tailwind-css---guía-rápida)
- [Props en React](#props-en-react)
- [Trucos y Tips](#trucos-y-tips)

---

## 🔥 Variables y Template Literals

### ¿Qué son las template literals?

Las **template literals** son strings especiales que te permiten **inyectar variables** dentro de texto usando backticks `` ` ` `` y `${}`.

### Sintaxis básica:

```javascript
// String normal (no permite variables)
const texto = "Hola " + nombre + ", tienes " + edad + " años";

// Template literal (permite variables)
const texto = `Hola ${nombre}, tienes ${edad} años`;
```

### Ejemplo en React con className:

```javascript
function Header() {
  const logoSize = "w-48 h-48";

  return (
    // ❌ Esto NO funciona (sin template literals)
    <div className="absolute ${logoSize}">

    // ✅ Esto SÍ funciona (con template literals)
    <div className={`absolute ${logoSize}`}>
      <img src="logo.png" />
    </div>
  );
}
```

### Desglose paso a paso:

```javascript
const logoSize = "w-48 h-48";

// 1. Escribes el template literal con backticks
`absolute left-1/2 ${logoSize}`

// 2. JavaScript lo convierte a:
"absolute left-1/2 w-48 h-48"

// 3. Se aplica al className:
<div className="absolute left-1/2 w-48 h-48">
```

### Múltiples variables:

```javascript
function Card() {
  const ancho = "w-64";
  const alto = "h-48";
  const color = "bg-blue-500";

  return (
    <div className={`${ancho} ${alto} ${color} rounded-lg shadow-xl`}>
      {/* Resultado: className="w-64 h-48 bg-blue-500 rounded-lg shadow-xl" */}
    </div>
  );
}
```

---

## 🆔 className vs ID

### Diferencias fundamentales:

| Característica | `className` (Clase) | `id` (ID) |
|---------------|---------------------|-----------|
| **Reutilizable** | ✅ Sí, múltiples elementos | ❌ No, único por página |
| **Selectores CSS** | `.nombre-clase` | `#nombre-id` |
| **Múltiples valores** | ✅ Sí: `"clase1 clase2 clase3"` | ❌ No, solo uno |
| **Uso en React** | Muy común | Poco común |
| **Tailwind CSS** | ✅ Usa clases | ❌ No usa IDs |

### Ejemplos:

```javascript
// ✅ CLASES (reutilizables)
<div className="w-48 h-48 bg-white rounded-full">Logo 1</div>
<div className="w-48 h-48 bg-white rounded-full">Logo 2</div>
<div className="w-48 h-48 bg-white rounded-full">Logo 3</div>
// Los 3 divs pueden tener las mismas clases

// ❌ IDs (únicos)
<div id="logo-principal">Logo 1</div>
<div id="logo-principal">Logo 2</div> // ❌ ERROR: ID duplicado
```

### ¿Cuándo usar cada uno?

```javascript
// CLASES: Para estilos y diseño (99% de los casos)
<button className="bg-blue-500 text-white px-4 py-2 rounded">
  Click me
</button>

// IDs: Para JavaScript (referencias únicas)
<form id="formulario-login">
  {/* Luego en JS: document.getElementById('formulario-login') */}
</form>
```

---

## 🎨 Cómo funcionan las clases en React

### Anatomía de className:

```javascript
<div className="clase1 clase2 clase3">
  {/* Cada palabra separada por espacio es una clase CSS */}
</div>
```

### La clase es el "conector" o "relacionador":

```
┌─────────────┐
│   CÓDIGO    │
│   REACT     │
└──────┬──────┘
       │
       │ className="w-48 h-48 bg-white"
       │
       ▼
┌─────────────┐
│  TAILWIND   │
│    CSS      │
│ .w-48 { ... }│
│ .h-48 { ... }│
│ .bg-white {...}
└─────────────┘
```

### Analogía de las etiquetas:

Piensa en las clases como **etiquetas** que le pegas a una caja:

```javascript
// Es como una caja con estas etiquetas:
className="frágil urgente grande rojo"

// Cada etiqueta (clase) le dice al navegador:
// - frágil → trátalo con cuidado (algún estilo)
// - urgente → prioridad alta (algún estilo)
// - grande → tamaño XL (algún estilo)
// - rojo → color rojo (algún estilo)
```

### Usando variables para organizar:

```javascript
function ProductCard() {
  // ✅ BUENA PRÁCTICA: Variables para reutilizar y mantener
  const cardSize = "w-64 h-96";
  const cardStyle = "rounded-lg shadow-xl";
  const cardColor = "bg-white";

  return (
    <div className={`${cardSize} ${cardStyle} ${cardColor} p-4`}>
      <h2>Producto</h2>
    </div>
  );
}
```

---

## 📐 Tailwind CSS - Guía Rápida

### Sistema de tamaños:

| Clase | Píxeles | Uso |
|-------|---------|-----|
| `w-20` `h-20` | 80px | Pequeño |
| `w-24` `h-24` | 96px | Pequeño-Mediano |
| `w-32` `h-32` | 128px | Mediano |
| `w-40` `h-40` | 160px | Mediano-Grande |
| `w-48` `h-48` | 192px | Grande |
| `w-56` `h-56` | 224px | Muy Grande |
| `w-64` `h-64` | 256px | Extra Grande |

**Fórmula:** El número × 4 = píxeles
Ejemplo: `w-48` = 48 × 4 = 192px

### Clases comunes:

```javascript
// TAMAÑO
w-full       // Ancho 100%
h-full       // Alto 100%
w-screen     // Ancho 100vw (toda la pantalla)
h-screen     // Alto 100vh (toda la pantalla)

// COLORES
bg-white     // Fondo blanco
bg-black     // Fondo negro
text-white   // Texto blanco
bg-blue-500  // Fondo azul (100-900 intensidad)

// ESPACIADO
p-4          // Padding 16px (todos los lados)
px-4         // Padding horizontal (left + right)
py-4         // Padding vertical (top + bottom)
m-4          // Margin 16px
mt-4         // Margin top
mb-4         // Margin bottom

// FLEXBOX
flex               // display: flex
flex-col           // flex-direction: column
items-center       // align-items: center (vertical)
justify-center     // justify-content: center (horizontal)
justify-between    // justify-content: space-between
gap-4              // Espacio entre items (16px)

// POSICIONAMIENTO
absolute     // position: absolute
relative     // position: relative
fixed        // position: fixed
top-0        // top: 0
left-1/2     // left: 50%

// BORDES Y REDONDEOS
rounded      // border-radius: 4px
rounded-lg   // border-radius: 8px
rounded-full // border-radius: 9999px (círculo)
border       // border: 1px solid
border-2     // border: 2px solid

// SOMBRAS
shadow       // Sombra pequeña
shadow-lg    // Sombra grande
shadow-xl    // Sombra extra grande
shadow-2xl   // Sombra super grande

// TIPOGRAFÍA
text-sm      // Texto pequeño (14px)
text-base    // Texto normal (16px)
text-lg      // Texto grande (18px)
text-xl      // Texto extra grande (20px)
text-2xl     // 24px
text-3xl     // 30px
text-4xl     // 36px
text-5xl     // 48px
text-6xl     // 60px
font-bold    // font-weight: bold
italic       // font-style: italic

// EFECTOS HOVER
hover:bg-blue-600    // Cambia color al pasar mouse
hover:scale-110      // Aumenta tamaño 110% al hover
transition           // Anima los cambios
transition-transform // Anima transformaciones
```

### Combinando clases:

```javascript
// Ejemplo completo de un botón:
<button className="
  bg-blue-500        // Fondo azul
  hover:bg-blue-700  // Fondo azul oscuro al hover
  text-white         // Texto blanco
  font-bold          // Texto en negrita
  py-2               // Padding vertical 8px
  px-4               // Padding horizontal 16px
  rounded            // Bordes redondeados
  shadow-lg          // Sombra grande
  transition         // Transiciones suaves
  hover:scale-105    // Crece 105% al hover
">
  Click aquí
</button>
```

---

## 🧩 Props en React

### ¿Qué son las props?

**Props** (properties) son **argumentos** que le pasas a un componente, como parámetros de una función.

### Sintaxis:

```javascript
// 1. RECIBIR props en el componente
function CollectionCircle({ logo, name }) {
  //                      ↑ Destructuring de props
  return (
    <div>
      <img src={logo} alt={name} />
      {/*      ↑          ↑ Usas las props aquí */}
    </div>
  );
}

// 2. PASAR props al componente
<CollectionCircle
  logo="/logos/logo1.png"   // ← Pasas el valor de 'logo'
  name="C3M"                 // ← Pasas el valor de 'name'
/>
```

### Ejemplo completo:

```javascript
// Componente que recibe props
function Tarjeta({ titulo, descripcion, imagen }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}

// Uso del componente
function App() {
  return (
    <div>
      <Tarjeta
        titulo="Producto 1"
        descripcion="Descripción del producto"
        imagen="/img/producto1.jpg"
      />

      <Tarjeta
        titulo="Producto 2"
        descripcion="Otra descripción"
        imagen="/img/producto2.jpg"
      />
    </div>
  );
}
```

### Props con valores dinámicos:

```javascript
// Puedes pasar variables, no solo strings
function App() {
  const productos = [
    { id: 1, nombre: "Camiseta", precio: 25 },
    { id: 2, nombre: "Pantalón", precio: 40 }
  ];

  return (
    <div>
      {productos.map(producto => (
        <ProductoCard
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
        />
      ))}
    </div>
  );
}
```

### Props con valores por defecto:

```javascript
function Button({ texto = "Click aquí", color = "blue" }) {
  //                     ↑ Valor por defecto si no se pasa
  return (
    <button className={`bg-${color}-500 text-white px-4 py-2`}>
      {texto}
    </button>
  );
}

// Uso:
<Button />                        // Usa valores por defecto
<Button texto="Enviar" />         // Solo cambia el texto
<Button color="red" />            // Solo cambia el color
<Button texto="Enviar" color="green" />  // Cambia ambos
```

---

## 💡 Trucos y Tips

### 1. Clases condicionales:

```javascript
function Alert({ tipo }) {
  const color = tipo === "error" ? "bg-red-500" : "bg-green-500";

  return (
    <div className={`${color} text-white p-4 rounded`}>
      Mensaje de alerta
    </div>
  );
}
```

### 2. Organizar clases largas:

```javascript
// ❌ Difícil de leer
<div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-2xl p-8 hover:scale-110 transition-transform">

// ✅ Mejor organizado
<div className={`
  w-64 h-64
  bg-white rounded-full
  flex items-center justify-center
  shadow-2xl p-8
  hover:scale-110 transition-transform
`}>
```

### 3. Reutilizar estilos con variables:

```javascript
function App() {
  const buttonStyle = "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700";

  return (
    <div>
      <button className={buttonStyle}>Guardar</button>
      <button className={buttonStyle}>Enviar</button>
      <button className={buttonStyle}>Cancelar</button>
    </div>
  );
}
```

### 4. Object-fit para imágenes:

```javascript
object-contain  // Mantiene proporción, puede dejar espacios
object-cover    // Cubre todo el espacio, puede recortar
object-fill     // Estira la imagen (puede deformar)
object-none     // Tamaño original
```

### 5. Centrar elementos (las 3 formas más comunes):

```javascript
// 1. Con Flexbox
<div className="flex items-center justify-center">
  Contenido centrado
</div>

// 2. Con position absolute
<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
  Contenido centrado
</div>

// 3. Con Grid
<div className="grid place-items-center">
  Contenido centrado
</div>
```

### 6. Responsive design:

```javascript
// Prefijos para tamaños de pantalla:
// sm: 640px y más
// md: 768px y más
// lg: 1024px y más
// xl: 1280px y más

<div className="
  w-full           // Móvil: ancho 100%
  md:w-1/2         // Tablet: ancho 50%
  lg:w-1/3         // Desktop: ancho 33%
">
  Contenido responsive
</div>
```

### 7. Estados hover, focus, active:

```javascript
<button className="
  bg-blue-500
  hover:bg-blue-700      // Al pasar el mouse
  active:bg-blue-900     // Al hacer click
  focus:ring-2           // Al enfocar (tab)
  focus:ring-blue-300
">
  Botón interactivo
</button>
```

---

## 🔄 Resumen de conceptos clave:

### Template Literals:
```javascript
const valor = "48";
`w-${valor} h-${valor}` → "w-48 h-48"
```

### className:
```javascript
// Es el "puente" entre el HTML y el CSS
<div className="w-48 bg-white"> // ← Estas clases activan estilos CSS
```

### Props:
```javascript
// Parámetros que recibes de componentes padres
function Hijo({ nombre, edad }) {
  return <p>{nombre} tiene {edad} años</p>;
}
```

### Variables para estilos:
```javascript
// Organiza y reutiliza estilos fácilmente
const estiloBoton = "bg-blue-500 px-4 py-2";
<button className={estiloBoton}>Click</button>
```

---

## 📖 Recursos adicionales:

- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **React Docs:** https://react.dev
- **MDN Web Docs:** https://developer.mozilla.org

---

**Última actualización:** Diciembre 2024
**Autor:** Apuntes para el proyecto 2BD Boutique

¡Guarda este archivo y consúltalo siempre que lo necesites! 🚀
