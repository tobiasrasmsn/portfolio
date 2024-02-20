import type { Metadata } from "next";
import { Urbanist as FontSans } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/shared/Navigation";
import { cn } from "@/lib/utils";
import PageShadow from "@/components/shared/PageShadow";
import Footer from "@/components/shared/Footer";
import { Providers } from "../providers";
export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "About Tobias Rasmussen",
    description: "Read about Tobias Rasmussen",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn("font-sans light dark:dark", fontSans.variable)}
            >
                <Providers>
                    <Navigation />
                    {children}
                    <PageShadow />
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
