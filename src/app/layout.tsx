import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fakhri-portfolio.vercel.app"),
  title: {
    default: "Fadhlur Rahman Fakhri — Software Engineer & 3D Artist",
    template: "%s | Fadhlur Rahman Fakhri",
  },
  description:
    "Personal Portfolio of Fadhlur Rahman Fakhri, Fresh Graduate in Informatics Engineering from Politeknik Caltex Riau. Specializing in Software Engineering, Computer Vision, and 3D Digital Creative Works.",
  keywords: [
    "Fadhlur Rahman Fakhri",
    "FR. Fakhri",
    "Software Engineer",
    "3D Artist",
    "Computer Vision",
    "Politeknik Caltex Riau",
    "PT. Devata Studio Kreatif",
    "Uda Ijal & Amaik",
    "Blender 3D",
    "CNN",
    "Haar Cascade",
    "Next.js",
    "Editorial Portfolio",
    "ArcGIS"
  ],
  authors: [{ name: "Fadhlur Rahman Fakhri" }],
  creator: "Fadhlur Rahman Fakhri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fakhri-portfolio.vercel.app",
    title: "Fadhlur Rahman Fakhri — Software Engineer & 3D Artist",
    description:
      "Building digital experiences through technology and creativity. Fresh Graduate in Informatics Engineering from Politeknik Caltex Riau.",
    siteName: "Fadhlur Rahman Fakhri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fadhlur Rahman Fakhri — Software Engineer & 3D Artist",
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
