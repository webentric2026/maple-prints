import React, { useState } from "react";
import { Search } from "lucide-react";
import ayurvedic_1 from '../assets/images/Products/ayurvedic-1.png'
import ayurvedic_2 from '../assets/images/Products/ayurvedic-2.png'
import ayurvedic_3 from '../assets/images/Products/ayurvedic-3.png'
import ayurvedic_4 from '../assets/images/Products/ayurvedic-4.png'
import cosmetic_1 from '../assets/images/Products/cosmetic-1.png'
import cosmetic_2 from '../assets/images/Products/cosmetic-2.png'
import cosmetic_3 from '../assets/images/Products/cosmetic-3.png'
import cosmetic_4 from '../assets/images/Products/cosmetic-4.png'
import cosmetic_5 from '../assets/images/Products/cosmetic-5.png'
import electronics_1 from '../assets/images/Products/electric-1.png'
import food_1 from '../assets/images/Products/food-1.png'
import food_2 from '../assets/images/Products/food-2.png'
import food_3 from '../assets/images/Products/food-3.png'
import food_4 from '../assets/images/Products/food-4.png'
import nutraceuticals_1 from '../assets/images/Products/nutra-1.png'
import nutraceuticals_2 from '../assets/images/Products/nutra-2.png'
import nutraceuticals_3 from '../assets/images/Products/nutra-3.png'
import nutraceuticals_4 from '../assets/images/Products/nutra-4.png'
import nutraceuticals_5 from '../assets/images/Products/nutra-5.png'
import nutraceuticals_6 from '../assets/images/Products/nutra-6.png'
import nutraceuticals_7 from '../assets/images/Products/nutra-7.png'
import pharmaceuticals_1 from '../assets/images/Products/pharma-1.png'
import pharmaceuticals_2 from '../assets/images/Products/pharma-2.png'
import pharmaceuticals_3 from '../assets/images/Products/pharma-3.png'
import pharmaceuticals_4 from '../assets/images/Products/pharma-4.png'
import pharmaceuticals_5 from '../assets/images/Products/pharma-5.png'
import pharmaceuticals_6 from '../assets/images/Products/pharma-6.png'
import pharmaceuticals_7 from '../assets/images/Products/pharma-7.png'
import pharmaceuticals_8 from '../assets/images/Products/pharma-8.png'

// ── Data ──────────────────────────────────────────────────────────────
const categories = [
    "All Products",
    "Ayurvedic",
    "Cosmetics",
    "Electronics",
    "Pharmaceuticals",
    "Nutraceuticals",
    "Food"
];

export const products = [
    // AYURVEDIC
    {
        id: 1,
        name: "Ero Gold Pro",
        category: "Ayurvedic",
        image: ayurvedic_1,
        specs: [
            { label: "Type", value: "Foil Stamping" },
        ],
    },
    {
        id: 2,
        name: "Yaxon - Shilajit",
        category: "Ayurvedic",
        image: ayurvedic_2,
        specs: [
            { label: "Type", value: "Rigid Carton" },
        ],
    },
    {
        id: 3,
        name: "Anshi - Shilajit",
        category: "Ayurvedic",
        image: ayurvedic_3,
        specs: [
            { label: "Type", value: "Rigid Carton" },
        ],
    },
    {
        id: 4,
        name: "Ojas Gold",
        category: "Ayurvedic",
        image: ayurvedic_4,
        specs: [
            { label: "Type", value: "Rigid Carton" },
        ],
    },

    // COSMETICS
    {
        id: 5,
        name: "DermEase - Collagen",
        category: "Cosmetics",
        image: cosmetic_1,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 6,
        name: "DermEase - Hair Serum",
        category: "Cosmetics",
        image: cosmetic_2,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 7,
        name: "GalaxTru - Face Serum",
        category: "Cosmetics",
        image: cosmetic_3,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 8,
        name: "Zovar - Face Cream",
        category: "Cosmetics",
        image: cosmetic_4,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 9,
        name: "Charcoal Face Wash",
        category: "Cosmetics",
        image: cosmetic_5,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },

    // ELECTRONICS
    {
        id: 10,
        name: "Newow LED",
        category: "Electronics",
        image: electronics_1,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },

    // FOOD
    {
        id: 11,
        name: "Anjeer Pack",
        category: "Food",
        image: food_1,
        specs: [
            { label: "Type", value: "Window Cartons" },
        ],
    },
    {
        id: 12,
        name: "Coconut Water",
        category: "Food",
        image: food_2,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 13,
        name: "Takeaway Box",
        category: "Food",
        image: food_3,
        specs: [
            { label: "Type", value: "Disposable Trays" },
        ],
    },
    {
        id: 14,
        name: "Food Tray",
        category: "Food",
        image: food_4,
        specs: [
            { label: "Type", value: "Disposable Trays" },
        ],
    },

    // NUTRACEUTICALS
    {
        id: 15,
        name: "Hydractive",
        category: "Nutraceuticals",
        image: nutraceuticals_1,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 16,
        name: "Herbal Drops",
        category: "Nutraceuticals",
        image: nutraceuticals_2,
        specs: [
            { label: "Type", value: "Label" },
        ],
    },
    {
        id: 17,
        name: "Vitamin Syrup",
        category: "Nutraceuticals",
        image: nutraceuticals_3,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 18,
        name: "Zyme Syrup",
        category: "Nutraceuticals",
        image: nutraceuticals_4,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 19,
        name: "Oudaily",
        category: "Nutraceuticals",
        image: nutraceuticals_5,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 20,
        name: "ORS Pack",
        category: "Nutraceuticals",
        image: nutraceuticals_6,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 21,
        name: "ORS Bulk",
        category: "Nutraceuticals",
        image: nutraceuticals_7,
        specs: [
            { label: "Type", value: "Corrugated Carton" },
        ],
    },

    // PHARMA
    {
        id: 22,
        name: "Femifast-Ultra",
        category: "Pharmaceuticals",
        image: pharmaceuticals_1,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 23,
        name: "Acklofen Plus",
        category: "Pharmaceuticals",
        image: pharmaceuticals_2,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 24,
        name: "ANCEF",
        category: "Pharmaceuticals",
        image: pharmaceuticals_3,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 25,
        name: "Dapoxilar-30",
        category: "Pharmaceuticals",
        image: pharmaceuticals_4,
        specs: [
            { label: "Type", value: "Metallic Finish" },
        ],
    },
    {
        id: 26,
        name: "Glencyper Plus",
        category: "Pharmaceuticals",
        image: pharmaceuticals_5,
        specs: [
            { label: "Type", value: "Metallic Finish" },
        ],
    },
    {
        id: 27,
        name: "Pharma Pack 6",
        category: "Pharmaceuticals",
        image: pharmaceuticals_6,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 28,
        name: "Pharma Pack 7",
        category: "Pharmaceuticals",
        image: pharmaceuticals_7,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
    {
        id: 29,
        name: "Pharma Pack 8",
        category: "Pharmaceuticals",
        image: pharmaceuticals_8,
        specs: [
            { label: "Type", value: "Mono Cartons" },
        ],
    },
];

// ── Product Card ──────────────────────────────────────────────────────
const ProductCard = ({ product }) => (
    <div className="border border-gray-200 bg-white shadow-sm flex flex-col">
        {/* Fixed Aspect Ratio Image */}
        <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
            <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1 ">
            <h3 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
                {product.name}
            </h3>

            {/* Specs */}
            <div className="space-y-0.5 mb-4 flex-1">
                {product.specs.map((spec) => (
                    <p key={spec.label} className="text-xs text-gray-500">
                        <span className="font-semibold text-gray-700">{spec.label}: </span>
                        {spec.value}
                    </p>
                ))}
            </div>

            {/* CTA */}
            <button className="w-full border border-blue-600 text-blue-600 text-xs font-semibold uppercase tracking-wider py-2 px-4 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                <a href="https://wa.me/9810152101">Request Quote</a>
            </button>
        </div>
    </div>
);

// ── Main Component ────────────────────────────────────────────────────
const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = products.filter((p) => {
        const matchCategory =
            activeCategory === "All Products" || p.category === activeCategory;
        const matchSearch = p.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <section className="bg-gray-50 min-h-screen py-20 px-6 md:px-16 lg:px-24">
            <div className="max-w-6xl mx-auto">

                {/* ── Section Header ── */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight mb-3">
                        Our Products
                    </h1>
                    <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
                        High-performance packaging solutions engineered for reliability,
                        precision, and global scale.
                    </p>
                </div>

                {/* ── Body: Sidebar + Grid ── */}
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start ">

                    {/* Sidebar */}
                    <aside className=" w-full md:w-48 lg:w-52">
                        {/* Search */}
                        <div className="relative mb-5">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full border border-gray-300 bg-white text-sm pl-9 pr-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Categories */}
                        <div>
                            <p className=" text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                                Categories
                            </p>
                            <ul className="space-y-1">
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => setActiveCategory(cat)}
                                            className={`w-full text-left text-sm px-3 py-2 font-medium transition-colors duration-150 ${activeCategory === cat
                                                ? "bg-blue-50 text-blue-700 border-l-2 border-blue-600"
                                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1 w-full">
                        {filtered.length > 0 ? (
                            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filtered.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
                                No products found.
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Products;