import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Happy Birthday Meilinda! 🎂",
  description: "Website ulang tahun spesial untuk Meilinda Khusnul Khotimah yang ke-28. Dibuat dengan cinta oleh Adit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
