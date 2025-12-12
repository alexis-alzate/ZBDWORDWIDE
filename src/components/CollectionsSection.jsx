/**
 * Componente CollectionsSection - Sección principal de colecciones
 *
 * Muestra:
 * - Título "Colecciones"
 * - Logos de las colecciones (C3M, 2BC, 2BD)
 * - Eslogan de la marca
 *
 * Esta sección ocupa el espacio central de la página
 */
function CollectionsSection() {
  // 🎨 AQUÍ PUEDES CAMBIAR EL TAMAÑO DEL TÍTULO "COLECCIONES"
  // Opciones: text-4xl (36px), text-5xl (48px), text-6xl (60px), text-7xl (72px), text-8xl (96px), text-9xl (128px)
  const tituloSize = "text-1xl"; // 👈 Cambia este valor para ajustar el tamaño del título

  // 🎨 OPACIDAD DEL TÍTULO "COLECCIONES"
  // Opciones: opacity-100 (sin transparencia), opacity-90, opacity-80, opacity-70, opacity-60, opacity-50 (muy transparente)
  const tituloOpacidad = "opacity-70"; // 👈 Cambia este valor para ajustar la transparencia (100 = opaco, 50 = muy transparente)

  // 📍 AQUÍ PUEDES MOVER EL TÍTULO HACIA ABAJO (desde arriba de la pantalla)
  // Opciones: top-16 (64px), top-20 (80px), top-24 (96px), top-32 (128px), top-40 (160px), top-48 (192px)
  const tituloPosicionY = "top-[130px]"; // 👈 Cambia este valor para bajar el título desde arriba

  // ◀️▶️ POSICIÓN HORIZONTAL DEL TÍTULO "COLECCIONES" (valores en píxeles)
  // ELIGE UNA DE LAS DOS OPCIONES (comenta la que NO uses con //):

  // OPCIÓN 1: Posicionar desde la IZQUIERDA de la pantalla ⬅️
  // const tituloPosicionX = "left-[795px]"; // 👈 Distancia desde el borde IZQUIERDO (ejemplo: left-[50px], left-[200px])

  // OPCIÓN 2: Posicionar desde la DERECHA de la pantalla ➡️
  // const tituloPosicionX = "right-[100px]"; // 👈 Distancia desde el borde DERECHO (ejemplo: right-[50px], right-[200px])

  // OPCIÓN 3: Centrado (por defecto)
  const tituloPosicionX = "left-1/2 -translate-x-1/2"; // 👈 Centrado horizontal perfecto

  // 🎨 TAMAÑOS INDIVIDUALES DE LOS LOGOS
  // Opciones: w-32 (128px), w-40 (160px), w-48 (192px), w-56 (224px), w-64 (256px), w-72 (288px), w-80 (320px)
  const logo1Size = "w-20 h-40"; // 👈 Tamaño del logo C3M (izquierda)
  const logo2Size = "w-[100px] h-40"; // 👈 Tamaño del logo 2BC (centro)
  const logo3Size = "w-20 h-40"; // 👈 Tamaño del logo 2BD (derecha)

  // 📏 ESPACIO ENTRE LOS LOGOS
  // Opciones: gap-4 (16px), gap-8 (32px), gap-12 (48px), gap-16 (64px), gap-20 (80px), gap-24 (96px)
  const espacioEntreLogos = "gap-5"; // 👈 Espacio entre los logos

  // 🎯 POSICIÓN VERTICAL INDIVIDUAL DE LOS LOGOS
  // Vertical: -mt-X (arriba), mt-0 (centro), mt-X (abajo)
  // Opciones: 0, 2, 4, 8, 12, 16, 20, 24, 32, 40
  const logo1PosY = "mt-0"; // 👈 Mover vertical LOGO 1 (C3M - Izquierda)
  const logo2PosY = "-mt-4"; // 👈 Mover vertical LOGO 2 (2BD BLACKLIST - Centro) ⭐ PRINCIPAL
  const logo3PosY = "mt-0"; // 👈 Mover vertical LOGO 3 (2BD - Derecha)

  // 📝 POSICIÓN DEL ESLOGAN "MÁS QUE UNA MARCA" (desde ABAJO de la pantalla)
  // Opciones: bottom-4 (16px), bottom-8 (32px), bottom-12 (48px), bottom-16 (64px), bottom-20 (80px), bottom-24 (96px)
  const esloganPosicion = "bottom-16"; // 👈 Cambia este valor para mover el eslogan desde abajo

  return (
    // flex-1: ocupa espacio disponible | flex flex-col: columna vertical
    // items-center: centra horizontalmente | justify-center: centra verticalmente
    // text-center: texto centrado | px-8: padding horizontal 32px | relative: para posicionar el título
    <section className="relative flex-1 flex flex-col items-center justify-center text-center px-20">

      {/* Título principal de la sección - POSICIÓN ABSOLUTA */}
      {/* absolute: se posiciona independiente */}
      {/* left-[Xpx] o right-[Xpx]: posición horizontal desde izquierda o derecha */}
      {/* font-bold: negrita | opacity-X: transparencia | drop-shadow: sombra personalizada */}
      <h2 className={`absolute ${tituloPosicionY} ${tituloPosicionX} ${tituloSize} ${tituloOpacidad} font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]`}>
        Colecciones
      </h2>

      {/* Contenedor de los logos de colecciones */}
      {/* flex: horizontal | mb-16: margen inferior 64px */}
      <div className={`flex ${espacioEntreLogos} mb-16`}>

        {/* Logo 1: 2BC (Izquierda) */}
        <img
          src="/logos/LOGO2.png"
          alt="2BC"
          className={`${logo1Size} ${logo1PosY} cursor-pointer transition-transform hover:scale-110 drop-shadow-2xl object-contain`}
        />

        {/* Logo 2: 2BD BLACKLIST con 2 bolitas (Centro) ⭐ PRINCIPAL */}
        <img
          src="/logos/logo3.png"
          alt="2BD BLACKLIST"
          className={`${logo2Size} ${logo2PosY} cursor-pointer transition-transform hover:scale-110 drop-shadow-2xl object-contain`}
        />

        {/* Logo 3: C3M (Derecha) */}
        <img
          src="/logos/logo4.png"
          alt="C3M"
          className={`${logo3Size} ${logo3PosY} cursor-pointer transition-transform hover:scale-110 drop-shadow-2xl object-contain`}
        />
      </div>

      {/* Eslogan de la marca - POSICIÓN ABSOLUTA desde abajo */}
      {/* absolute: posición independiente | left-1/2: centrado horizontal | -translate-x-1/2: ajuste de centrado */}
      {/* text-3xl: 30px | font-bold: negrita */}
      {/* leading-tight: espaciado ajustado | drop-shadow: sombra negra 90% */}
      <div className={`absolute ${esloganPosicion} left-1/2 -translate-x-1/2 text-3xl font-bold leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]`}>
        <p>MÁS QUE UNA</p>
        <p>MARCA</p>
      </div>
    </section>
  );
}

export default CollectionsSection;
