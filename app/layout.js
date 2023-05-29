import { Layout } from "./(components)";
import Providers from "./(components)/Providers";

import "./globals.css";

export const metadata = {
  title: "Realty",
  description: "Get your best property at best price in US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
