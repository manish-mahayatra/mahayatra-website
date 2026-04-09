"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "MahaYatra",
//   description: "Journey Beyond Boundaries",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>


        <Navbar />
        {children}
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/918595931276"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            backgroundColor: "#25D366",
            borderRadius: "50%",
            width: "56px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="white"
          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.775L0 32l8.476-2.003A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.784-1.856l-.486-.29-5.03 1.188 1.216-4.899-.317-.503A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.77c-.398-.199-2.354-1.162-2.718-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.199-1.681-.62-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.664.133-.265.066-.497-.033-.696-.1-.199-.895-2.158-1.227-2.955-.323-.775-.65-.67-.895-.682l-.763-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.362-1.393 3.32s1.426 3.852 1.625 4.117c.199.265 2.806 4.283 6.798 6.007.95.41 1.691.655 2.269.839.953.303 1.82.26 2.505.158.764-.114 2.354-.963 2.685-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z" />
          </svg>
        </a>


        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
