import { LOGOS, TEXTOS } from "../constants/data";

interface HeaderProps {
    logoSrc?: string;
    titulo?: string;
}

export default function Header({
    logoSrc = LOGOS.principal,
    titulo = TEXTOS.header.titulo
}: HeaderProps) {
    // Ajustes visuales rápidos
    const logoSize = "w-36 h-16 sm:w-48 sm:h-24 md:w-64 md:h-32 lg:w-96 lg:h-48";

    const bannerAltura = "h-24";

    const textoPosY = "-mt-[0px]";

    const logoCentralPosY = "-mt-[0px]";

    return (
        <header className="relative flex flex-col items-center gap-3 p-4 text-center md:flex-row md:justify-between md:text-left md:p-6 lg:p-8 group">
            {/* Banda hover detrás del contenido */}
            <div className={`absolute top-0 left-0 right-0 ${bannerAltura} bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 -z-10`} />

            {/* Título de marca */}
            <h1 className={`relative z-10 ${textoPosY} text-base sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-[0.4em]`}>
                {titulo}
            </h1>

            {/* Logo central */}
            <div className={`z-10 ${logoSize} ${logoCentralPosY} md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2`}>
                <img
                    src={logoSrc}
                    alt="2BD Logo"
                    className="w-full h-full object-contain"
                />
            </div>
        </header>
    );
}
