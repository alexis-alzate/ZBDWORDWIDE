export type BrandKey = "bc2" | "blacklist" | "c3m";

export interface Product {
    id: string;
    marca: BrandKey;
    nombre: string;
    precio?: string;
    imagen: string;
    etiqueta?: string;
}

export interface Brand {
    id: BrandKey;
    nombre: string;
}

export const BRANDS: Brand[] = [
    { id: "bc2", nombre: "2BC" },
    { id: "blacklist", nombre: "2BD BLACKLIST" },
    { id: "c3m", nombre: "C3M" }
];

export const PRODUCTS: Product[] = [
    {
        id: "bc2-hoodie-gris",
        marca: "bc2",
        nombre: "Hoodie Gris",
        precio: "$444.000,00",
        imagen: "/products/bc2/hoodie-gris.png",
        etiqueta: "SOLD OUT"
    },
    {
        id: "bc2-hoodie-negro",
        marca: "bc2",
        nombre: "Hoodie Negro",
        precio: "$666.000,00",
        imagen: "/products/bc2/hoodie-negro.png",
        etiqueta: "SOLD OUT"
    },
    {
        id: "blacklist-botas",
        marca: "blacklist",
        nombre: "Botas Negras",
        precio: "$400.000,00",
        imagen: "/products/blacklist/botas-negras.png"
    },
    {
        id: "c3m-chaqueta",
        marca: "c3m",
        nombre: "Chaqueta Negra",
        precio: "$622.000,00",
        imagen: "/products/c3m/chaqueta-negra.png"
    }
];
