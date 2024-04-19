import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
import localFont from "next/font/local";
import Layout from "@/components/layout";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Working from "@/components/Working";
import Product from "@/components/Product";
import ReviewsPage from "@/components/ReviewsPage";
import ProjectStart from "@/components/ProjectStart";
import EndPage from "@/components/EndPage";
const myFont = localFont({ src: "../fonts/Gilroy-Medium.ttf" });

export default function Home() {
  return (
    <main style={myFont.style}>
      <div className=" relative">
        <div className="absolute top-0 -z-50 flex justify-center px-10 lg:px-20 xl:px-32 3xl:px-40">
          <img src="/assets/Lines.png" className="  " />
        </div>
        <Layout>
          <Hero />
          <Offer />
          <Working />
          <Product />
          <ReviewsPage />
          <ProjectStart />
          <EndPage />
        </Layout>
      </div>
    </main>
  );
}
