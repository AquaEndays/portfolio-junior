import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { profile } from "@/lib/data";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const displayFont = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.fullName} — ${profile.role} | Portfolio`,
  description: profile.tagline,
  authors: [{ name: profile.fullName, url: profile.github }],
  openGraph: {
    title: `${profile.fullName} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090C12" },
    { media: "(prefers-color-scheme: light)", color: "#F5F7FA" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${displayFont.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t)t=window.matchMedia("(prefers-color-scheme:light)").matches?"light":"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-bg font-sans text-fg antialiased selection:bg-accent selection:text-bg">
        <a href="#contenu" className="skip">
          Aller au contenu principal
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <noscript>
          <style>{`.reveal,.reveal-word,.reveal-line{opacity:1!important;transform:none!important;filter:none!important;clip-path:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
