import "./globals.css";
import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import { Navbar } from "@/app/components/Navbar/Navbar";
import { Footer } from "@/app/components/Footer/Footer";
import { AuthProvider } from "@/providers/AuthProvider";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "True Crime Observer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={spectral.className}
        style={{
          backgroundImage: `url('observer_bckg.jpg')`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          height: "500px",
        }}
      >
        <AuthProvider>
          <div className="container">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
