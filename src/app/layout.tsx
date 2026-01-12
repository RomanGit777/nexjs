import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
    title: "JSONPlaceholder App",
    description: "Users, posts and comments viewer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
