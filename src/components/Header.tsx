import { LOGOS, TEXTOS } from "../constants/data";
import HamburgerMenu from "./HamburgerMenu";
import CartButton from "./CartButton";

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

            <div className="z-20 flex w-full items-center gap-3 md:hidden">
                <HamburgerMenu />
                <h1 className={`relative z-10 flex-1 text-left ${textoPosY} text-base sm:text-lg font-bold tracking-[0.4em]`}>
                    {titulo}
                </h1>
                <CartButton />
            </div>

            <div className="z-20 hidden w-full items-center justify-between md:flex">
                <div className="flex items-center gap-4">
                    <HamburgerMenu />
                    <h1 className={`relative z-10 text-left ${textoPosY} text-2xl lg:text-3xl font-bold tracking-[0.4em]`}>
                        {titulo}
                    </h1>
                </div>
                <CartButton />
            </div>

            {/* Logo central */}
            <div className={`z-10 ${logoSize} ${logoCentralPosY} md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2`}>
                <img
                    src={logoSrc}
                    alt="2BD Logo"
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="hidden items-center gap-3 md:ml-auto md:hidden">
                <CartButton />
                <HamburgerMenu />
            </div>
        </header>
    );
}
