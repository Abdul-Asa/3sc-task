import type { Metadata } from "next";
import { Poppins, Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { cookies } from "next/headers";
import { AppProvider } from "@/lib/hooks/useAppContext";
import { getNomination, getNominees } from "@/lib/server-actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins",
});

const anon_pro = Anonymous_Pro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anon-pro",
});

export const metadata: Metadata = {
  title: "Cube Nominations",
  description: "Made by Shehu",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authCookie = cookies().get("auth-token")?.value;
  const nominations = authCookie ? await getNomination() : null;
  const nominees = authCookie ? await getNominees() : null;

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${anon_pro.variable} min-h-screen flex flex-col`}
      >
        <AppProvider
          initialValues={{
            authToken: authCookie!,
            nominations: nominations,
            nominees: nominees,
          }}
        >
          <Navbar />
          <main className="relative overflow-hidden flex h-[calc(100vh-72px)] flex-col items-center justify-center lg:px-20  bg-backdrop-gradient">
            {children}
            <div className="absolute bottom-[-635px] left-[-399px] 2xl:h-full 2xl:w-full 2xl:bottom-0 2xl:left-0  h-[1310px] w-[1839px] bg-blob-pattern bg-no-repeat bg-cover z-0 " />
          </main>
          <Footer />
          <ToastContainer />
        </AppProvider>
      </body>
    </html>
  );
}

//Refactor the main and div tw to use cn
