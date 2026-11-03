import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fakhri-portfolio.vercel.app"),
  title: {
    default: "M. Fakhri — Software Engineer & 3D Artist",
    template: "%s | M. Fakhri",
  },
  description:
    "Personal Portfolio of M. Fakhri, Fresh Graduate in Informatics Engineering from Politeknik Caltex Riau. Specializing in Software Engineering, Computer Vision, and 3D Digital Creative Works.",
  keywords: [
    "M. Fakhri",
    "Muhammad Fakhri",
    "Software Engineer",
    "3D Artist",
    "Computer Vision",
    "Politeknik Caltex Riau",
    "PT Devata Studio Kreatif",
    "Uda Ijal & Amaik",
    "Blender 3D",
    "CNN",
    "Haar Cascade",
    "Next.js",
    "Editorial Portfolio",
  ],
  authors: [{ name: "M. Fakhri" }],
  creator: "M. Fakhri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fakhri-portfolio.vercel.app",
    title: "M. Fakhri — Software Engineer & 3D Artist",
    description:
      "Building digital experiences through technology and creativity. Fresh Graduate in Informatics Engineering from Politeknik Caltex Riau.",
    siteName: "M. Fakhri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Fakhri — Software Engineer & 3D Artist",
    description:
      "Building digital experiences through technology and creativity. Informatics Engineering, Politeknik Caltex Riau.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-portfolio-bg dark:bg-portfolio-darkBg text-portfolio-text dark:text-portfolio-darkText antialiased transition-colors duration-200">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
