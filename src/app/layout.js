import "./globals.css";
import Header from "@/partials/Header";

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
      <body className={`roboto-regular antialiased min-h-screen flex flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
