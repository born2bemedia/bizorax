import HomeBlog from "./_components/HomeBlog";
import HomeHero from "./_components/HomeHero";
import HomeHow from "./_components/HomeHow";
import HomeReady from "./_components/HomeReady";
import HomeText from "./_components/HomeText";
import HomeTools from "./_components/HomeTools";
import HomeWhat from "./_components/HomeWhat";

export const metadata = {
  title: "",
  description:
    "",
  openGraph: {
    title: "",
    description:
      "",
    images: "",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeText />
      <HomeWhat />
      <HomeHow />
      <HomeTools />
      <HomeBlog />
      <HomeReady />
    </>
  );
}
