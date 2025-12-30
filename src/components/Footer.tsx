import { TEXTOS } from "../constants/data";

interface FooterProps {
    textoIdentidad?: string;
    textoBienvenida?: string;
}

export default function Footer({
    textoIdentidad = TEXTOS.footer.identidad,
    textoBienvenida = TEXTOS.footer.bienvenida
}: FooterProps) {
    // Ajustes visuales rápidos
    const margenSuperior = "mt-10 sm:mt-12";

    const textoSize = "text-xs sm:text-sm md:text-base";

    const esloganSize = textoSize;

    const paddingFooter = "px-6 py-8";

    const espacioTextos = "gap-2";

    return (
        <footer className={`w-full text-center text-white ${margenSuperior} ${paddingFooter} ${textoSize}`}>
            {/* Bloques de texto */}
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                <div className={`${esloganSize} font-bold uppercase tracking-[0.2em]`}>
                    <p>{TEXTOS.colecciones.eslogan.linea1}</p>
                    <p>{TEXTOS.colecciones.eslogan.linea2}</p>
                </div>

                <div className={`flex flex-col ${espacioTextos}`}>
                    <p>{textoIdentidad}</p>
                    <p className="font-bold uppercase tracking-[0.2em]">{textoBienvenida}</p>
                </div>
            </div>
        </footer>
    );
}
