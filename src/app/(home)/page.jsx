import HomeHero from "./_components/HomeHero";
import HomeReady from "./_components/HomeReady";
import HomeText from "./_components/HomeText";

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
      <HomeReady />
    </>
  );
}
