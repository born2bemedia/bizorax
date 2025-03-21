import "@/styles/base.scss";
import HomeBlog from "./_components/HomeBlog";
import HomeHero from "./_components/HomeHero";
import HomeHow from "./_components/HomeHow";
import HomeMain from "./_components/HomeMain";
import HomeOur from "./_components/HomeOur";
import HomePartners from "./_components/HomePartners";
import HomeReady from "./_components/HomeReady";
import HomeSolutions from "./_components/HomeSolutions";
import HomeText from "./_components/HomeText";
import HomeTools from "./_components/HomeTools";
import HomeWhat from "./_components/HomeWhat";

export const metadata = {
  title: "Bizorax: Tailored Business Solutions for Growth and Success",
  description:
    "Bizorax helps businesses overcome challenges and achieve their goals through strategic planning, operational efficiency, and innovative solutions.",
  openGraph: {
    title: "Bizorax: Tailored Business Solutions for Growth and Success",
    description:
      "Bizorax helps businesses overcome challenges and achieve their goals through strategic planning, operational efficiency, and innovative solutions.",
    images: "/images/meta-banner.jpg",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeText />
      <HomeWhat />
      <HomeSolutions />
      <HomeMain />
      <HomeHow />
      <HomeTools />
      <HomePartners />
      <HomeOur />
      <HomeBlog />
      <HomeReady />
    </>
  );
}
