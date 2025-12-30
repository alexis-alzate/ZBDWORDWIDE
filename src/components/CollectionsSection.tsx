import CollectionCircle from "./CollectionCircle";
import { LOGOS, TEXTOS } from "../constants/data";
export default function CollectionsSection() {
    // Navega a la marca correspondiente
    const scrollToBrand = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    // Ajustes visuales rápidos
    const separacionSuperior = "mt-12 sm:mt-16 lg:mt-20";

    const tituloSize = "text-[10px] sm:text-xs lg:text-sm";

    const tituloEstilos = TEXTOS.colecciones.estilos;
    const tituloOpacidad = tituloEstilos.tituloOpacidad;

    const tituloDecoracion = tituloEstilos.tituloDecoracion;

    const espacioLogos = "gap-6 sm:gap-10 lg:gap-14";

    const paddingSeccion = "px-6 py-12 sm:px-10 lg:px-20";

    return (
        <section className={`relative flex-1 w-full text-center text-white ${separacionSuperior} ${paddingSeccion}`}>
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
                {/* Título principal */}
                <h2 className={`${tituloSize} ${tituloOpacidad} ${tituloDecoracion} font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]`}>
                    {TEXTOS.colecciones.titulo}
                </h2>

                {/* Logos de colecciones */}
                <div className={`flex w-full flex-wrap items-center justify-center ${espacioLogos}`}>
                    <CollectionCircle
                        logo={LOGOS.colecciones.c3m}
                        name={TEXTOS.colecciones.nombres.c3m}
                        onClick={() => scrollToBrand("brand-c3m")}
                    />
                    <CollectionCircle
                        logo={LOGOS.colecciones.blacklist}
                        name={TEXTOS.colecciones.nombres.blacklist}
                        destacado
                        onClick={() => scrollToBrand("brand-blacklist")}
                    />
                    <CollectionCircle
                        logo={LOGOS.colecciones.bc2}
                        name={TEXTOS.colecciones.nombres.bc2}
                        onClick={() => scrollToBrand("brand-bc2")}
                    />
                </div>
            </div>
        </section>
    );
}
