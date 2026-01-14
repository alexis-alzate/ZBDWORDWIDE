import type { BrandKey } from "../data/products";

export const WC_STORE_API_URL =
    import.meta.env.VITE_WC_STORE_API_URL ??
    "https://www.2bdboutique.com/wp-json/wc/store";

// Ajusta los slugs de categorías en WooCommerce para mapear marcas.
export const BRAND_CATEGORY_SLUGS: Record<BrandKey, string[]> = {
    c3m: ["c3m"],
    bc2: ["bc2", "2bc"],
    blacklist: ["blacklist", "2bd-blacklist"]
};
