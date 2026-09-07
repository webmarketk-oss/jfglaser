import type { Metadata } from "next";
import "./globals.css";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  title: "JFG Clinic - Offre épilation jusqu'à -40%",
  description:
    "Épilation laser JFG Clinic. 2 étapes pour demander votre offre jusqu'à -40%, avec test offert avant de commencer.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {META_PIXEL_ID ? (
          <noscript>
            <img
              alt=""
              height={1}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              style={{ display: "none" }}
              width={1}
            />
          </noscript>
        ) : null}
        {children}
      </body>
    </html>
  );
}
