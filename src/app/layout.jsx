import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Roboto } from "next/font/google";
import "../styles/main.scss";

export const metadata = {
  title: "Pediatric.u",
  description: "Pediatric.uz - tibbiyotga oid maqolalarr to'plami.",
};

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body cz-shortcut-listen="false">
        <Navbar />
        <div className="body">
          {children}
        </div>
        <div className="container footer">
          <Footer />
        </div>
      </body>
    </html>
  );
}
