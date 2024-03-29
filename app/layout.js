import { Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const source_sans_3 = Source_Sans_3({
    subsets: ['latin'],
    display: 'swap',
    weight: ['700', '800'],
    variable: '--font-source_sans_3',
})

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${source_sans_3.variable}`}>{children}</body>
        </html>
    );
}
