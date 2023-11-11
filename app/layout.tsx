import type { Metadata } from "next";
import { Poppins, Anonymous_Pro } from "next/font/google";

import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { cookies } from "next/headers";
import axios from "axios";

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
  let nominees = null;
  const auth = cookies().get("auth-token")?.value;
  async function getNominees() {
    const endpoint = "https://cube-academy-api.cubeapis.com/api/nomination";
    const config = {
      headers: { Authorization: `Bearer ${auth}` },
    };
    try {
      const response = await axios.get(endpoint, config);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }
  if (auth) nominees = await getNominees();

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${anon_pro.variable} min-h-screen flex flex-col`}
      >
        <Navbar nominees={nominees} />
        <main className="relative overflow-hidden flex h-[calc(100vh-72px)] flex-col items-center justify-center lg:px-20 lg:pt-10 lg:pb-20 bg-backdrop-gradient">
          <div className="relative flex w-full h-full items-center lg:p-4 justify-center z-[1]">
            {children}
          </div>
          <div className="absolute bottom-[-635px] left-[-399px] 2xl:h-full 2xl:w-full 2xl:bottom-0 2xl:left-0  h-[1310px] w-[1839px] bg-blob-pattern bg-no-repeat bg-cover z-0 " />
        </main>

        <Footer />
      </body>
    </html>
  );
}

//Refactor the main and div tw to use cn
