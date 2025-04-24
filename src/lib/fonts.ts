// src/fonts/passionone.ts
import localFont from "next/font/local";

export const passionOne = localFont({
    src: [
        {
            path: "../fonts/passion-one/PassionOne-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/passion-one/PassionOne-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/passion-one/PassionOne-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-passion",
    display: "swap",
});

export const geist = localFont({
    src: [
        {
            path: "../fonts/geist-sans/geist-sans-latin-100-normal.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../fonts/geist-sans/geist-sans-latin-200-normal.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../fonts/geist-sans/geist-sans-latin-300-normal.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../fonts/geist-sans/geist-sans-latin-400-normal.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/geist-sans/geist-sans-latin-500-normal.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/geist-sans/geist-sans-latin-600-normal.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../fonts/geist-sans/geist-sans-latin-700-normal.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/geist-sans/geist-sans-latin-800-normal.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../fonts/geist-sans/geist-sans-latin-900-normal.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-geist",
    display: "swap",
});
