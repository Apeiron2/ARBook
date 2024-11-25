import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "ARBook",
  description: "ARBook - Tài liệu học AR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
        />
      </head>
      <body className={`roboto-regular antialiased h-screen`}>{children}</body>
    </html>
  );
}
