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
    { id: "c3m", nombre: "C3M" },
    { id: "bc2", nombre: "2BC" },
    { id: "blacklist", nombre: "2BD BLACKLIST" }
];

export const PRODUCTS: Product[] = [
    {
        id: "c3m-jesus-saves",
        marca: "c3m",
        nombre: "JESUS SAVES",
        imagen: "/products/c3m/1JESUS SAVES.png"
    },
    {
        id: "c3m-mortal-krumpbuck",
        marca: "c3m",
        nombre: "MORTAL KRUMPBUCK",
        imagen: "/products/c3m/1MORTALKRUMPBUCK.png"
    },
    {
        id: "c3m-bober-buck",
        marca: "c3m",
        nombre: "BOBER BUCK",
        imagen: "/products/c3m/BOBER BUCK.png"
    },
    {
        id: "c3m-iak-camiseta-nude",
        marca: "c3m",
        nombre: "IAK CAMISETA NUDE",
        imagen: "/products/c3m/IAK CAMISETA NUDE.png"
    },
    {
        id: "bc2-hoodie-gris",
        marca: "bc2",
        nombre: "Hoodie Gris",
        precio: "$444.000,00",
        imagen: "/products/bc2/1224.png",
        etiqueta: "SOLD OUT"
    },
    {
        id: "bc2-hoodie-negro",
        marca: "bc2",
        nombre: "Hoodie Negro",
        precio: "$666.000,00",
        imagen: "/products/bc2/9ec994b4-b2fb-4cc6-b244-0b36a2a76d61.jpg",
        etiqueta: "SOLD OUT"
    },
    {
        id: "bc2-botas",
        marca: "bc2",
        nombre: "Botas Negras",
        precio: "$400.000,00",
        imagen: "/products/bc2/28be0030-7e51-4b5d-9be1-7605790c88e1.jpg",
        etiqueta: "SOLD OUT"
    },
    {
        id: "bc2-chaqueta",
        marca: "bc2",
        nombre: "Chaqueta Negra",
        precio: "$622.000,00",
        imagen: "/products/bc2/366bd7fc-b96e-4003-a521-b642c4d39767.JPG",
        etiqueta: "SOLD OUT"
    }
];
