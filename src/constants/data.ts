// Logos

interface LogosCollection {
    bc2: string;
    blacklist: string;
    c3m: string;
}

interface Logos {
    principal: string;
    colecciones: LogosCollection;
}

export const LOGOS: Logos = {
    principal: "/logos/logo1.PNG",
    colecciones: {
        bc2: "/logos/logo4.png",
        blacklist: "/logos/logo3.png",
        c3m: "/logos/LOGO2.png"
    }
};

// Textos del sitio

interface HeaderText {
    titulo: string;
}

interface FooterText {
    identidad: string;
    bienvenida: string;
}

interface CollectionEslogan {
    linea1: string;
    linea2: string;
}

interface CollectionNames {
    bc2: string;
    blacklist: string;
    c3m: string;
}

interface CollectionStyles {
    tituloOpacidad: string;
    tituloDecoracion: string;
}

interface CollectionsText {
    titulo: string;
    eslogan: CollectionEslogan;
    nombres: CollectionNames;
    estilos: CollectionStyles;
}

interface Textos {
    header: HeaderText;
    footer: FooterText;
    colecciones: CollectionsText;
}

export const TEXTOS: Textos = {
    header: {
        titulo: "2BD WORLDWIDE"
    },

    footer: {
        identidad: "Somos un universo con identidad.",
        bienvenida: "Bienvenido a 2BD WORLDWIDE"
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
        },
        estilos: {
            tituloOpacidad: "opacity-60",
            tituloDecoracion: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-6 py-2 uppercase tracking-[0.35em] backdrop-blur-sm"
        }
    }
};

// Carrusel de fondo
export const IMAGE_SETS: string[][] = [
    ["/2bd/2BD2.JPG", "/2bd/2BD1.JPG", "/2bd/2BD3.JPG"],
    ["/2bd/2BD4.JPG", "/2bd/2BD5.JPG", "/2bd/2BD6.JPG"],
    ["/2bd/2BD7.JPG", "/2bd/2BD8.JPG", "/2bd/2BD9.JPG"]
];

// Configuración del carrusel

interface CarouselConfig {
    intervalo: number;
    duracionTransicion: number;
}

export const CAROUSEL_CONFIG: CarouselConfig = {
    intervalo: 5000,
    duracionTransicion: 1000
};
