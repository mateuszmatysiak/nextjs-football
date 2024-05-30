import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fantasy App",
  description: "Create your dream team and score points",
};

export default function RootLayout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={karla.className}>
        <div>
          <Menu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
