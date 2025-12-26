import { BRANDS, PRODUCTS } from "../data/products";

interface ProductCardProps {
    nombre: string;
    imagen: string;
    precio?: string;
    etiqueta?: string;
}

function ProductCard({ nombre, imagen, precio, etiqueta }: ProductCardProps) {
    return (
        <article className="group relative flex w-full flex-col items-center">
            {etiqueta ? (
                <span className="absolute left-0 top-0 rounded-sm bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
                    {etiqueta}
                </span>
            ) : null}
            <div className="flex w-full items-center justify-center">
                <img
                    src={imagen}
                    alt={nombre}
                    className="max-h-56 w-full max-w-[220px] object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-[1.03]"
                />
            </div>
            <div className="mt-6 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black">
                    {nombre}
                </p>
                {precio ? (
                    <p className="mt-2 text-xs tracking-[0.15em] text-black/70">{precio}</p>
                ) : null}
            </div>
        </article>
    );
}

export default function NewDropSection() {
    const espacioInferior = "pb-[120vh] sm:pb-[140vh] lg:pb-[160vh]";

    const scrollToNewDrop = () => {
        const element = document.getElementById("new-drop-content");
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section id="new-drop" className="relative bg-white text-black">
            {/* Botón chevron animado */}
            <button
                onClick={scrollToNewDrop}
                className="group absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
                aria-label="Scroll to new drop section"
            >
                {/* Ícono SVG de chevron-down con animación */}
                <svg
                    className="h-6 w-6 animate-bounce text-black transition-transform duration-300 group-hover:translate-y-0.5"
                    fill="none"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>

            <div
                id="new-drop-content"
                className={`mx-auto flex w-full max-w-6xl flex-col items-center px-6 pt-16 ${espacioInferior} sm:px-10 sm:pt-24`}
            >
                <h2 className="text-2xl font-bold uppercase tracking-[0.4em] sm:text-3xl md:text-4xl">
                    NEW DROP
                </h2>
                {BRANDS.map((brand) => {
                    const productosMarca = PRODUCTS.filter((producto) => producto.marca === brand.id);

                    if (!productosMarca.length) {
                        return null;
                    }

                    return (
                        <section
                            key={brand.id}
                            id={`brand-${brand.id}`}
                            className="mt-16 w-full first:mt-12 sm:mt-20"
                        >
                            <h3 className="text-xs font-semibold uppercase tracking-[0.45em] text-black/70">
                                {brand.nombre}
                            </h3>
                            <div className="mt-10 grid w-full grid-cols-2 items-end gap-8 sm:grid-cols-3 sm:gap-10 lg:grid-cols-4 lg:gap-12">
                                {productosMarca.map((producto) => (
                                    <ProductCard
                                        key={producto.id}
                                        nombre={producto.nombre}
                                        imagen={producto.imagen}
                                        precio={producto.precio}
                                        etiqueta={producto.etiqueta}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </section>
    );
}
