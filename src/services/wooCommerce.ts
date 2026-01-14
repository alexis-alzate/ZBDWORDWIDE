import type { BrandKey, Product } from "../data/products";
import { BRAND_CATEGORY_SLUGS, WC_STORE_API_URL } from "../config/wooCommerce";

interface WooProductCategory {
    id: number;
    name: string;
    slug: string;
}

interface WooProductImage {
    id: number;
    src: string;
    name: string;
    alt: string;
}

interface WooProductPrices {
    price: string;
    regular_price: string;
    sale_price: string;
    currency_code: string;
    currency_symbol: string;
    currency_minor_unit: number;
    currency_prefix: string;
    currency_suffix: string;
}

interface WooProduct {
    id: number;
    name: string;
    categories: WooProductCategory[];
    images: WooProductImage[];
    prices: WooProductPrices;
    on_sale: boolean;
    stock_status: "instock" | "outofstock" | "onbackorder";
}

const getBrandKeyFromCategories = (categories: WooProductCategory[]): BrandKey | null => {
    for (const [brandKey, slugs] of Object.entries(BRAND_CATEGORY_SLUGS) as [BrandKey, string[]][]) {
        if (categories.some((category) => slugs.includes(category.slug))) {
            return brandKey;
        }
    }

    return null;
};

const formatPrice = (prices: WooProductPrices): string | undefined => {
    const raw = Number(prices.price);
    if (!Number.isFinite(raw)) {
        return undefined;
    }

    const minorUnit = Number.isFinite(prices.currency_minor_unit) ? prices.currency_minor_unit : 2;
    const value = raw / Math.pow(10, minorUnit);

    try {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: prices.currency_code || "COP",
            minimumFractionDigits: minorUnit
        }).format(value);
    } catch {
        return `${prices.currency_prefix}${value.toFixed(minorUnit)}${prices.currency_suffix}`;
    }
};

export const fetchWooProducts = async (): Promise<Product[]> => {
    const response = await fetch(`${WC_STORE_API_URL}/products?per_page=100`);
    if (!response.ok) {
        throw new Error(`WooCommerce request failed: ${response.status}`);
    }

    const data = (await response.json()) as WooProduct[];

    return data
        .map((product) => {
            const brandKey = getBrandKeyFromCategories(product.categories);
            if (!brandKey) {
                return null;
            }

            const image = product.images?.[0]?.src;
            if (!image) {
                return null;
            }

            const etiqueta = product.stock_status === "outofstock" ? "SOLD OUT" : undefined;
            const precio = formatPrice(product.prices);

            const mapped: Product = {
                id: `${product.id}`,
                marca: brandKey,
                nombre: product.name,
                imagen: image,
                ...(precio ? { precio } : {}),
                ...(etiqueta ? { etiqueta } : {})
            };

            return mapped;
        })
        .filter((product): product is Product => product !== null);
};
