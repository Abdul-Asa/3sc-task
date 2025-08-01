import { Poppins, Anonymous_Pro } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { cookies } from "next/headers";
import { AppProvider } from "@/lib/hooks/useAppContext";
import { getNomination, getNominees } from "@/lib/server-actions";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
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

export const metadata = {
  title: "CUBE OF THE MONTH NOMINATIONS",
  description: "3SC Web Developer Task - Cube Academy",
  keywords: [
    "Cube Academy",
    "Academy",
    "Tailwind CSS",
    "Nextjs",
    "3 sided cude",
  ],
  authors: [
    {
      name: "abdul-asa",
      url: "https://asa-dev.vercel.app/",
    },
  ],
  creator: "Abdullah Shehu",

  openGraph: {
    type: "website",
    locale: "en_UK",
    url: "https://3sc-task.vercel.app/",
    title: "CUBE OF THE MONTH NOMINATIONS",
    description: "3SC Web Developer Task - Cube Academy",
    siteName: "CUBE OF THE MONTH NOMINATIONS",
    images: [
      {
        url: "/og-img.png",
        width: 800,
        height: 600,
        alt: "Cube of the month",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
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
        <Analytics />
      </body>
    </html>
  );
}
