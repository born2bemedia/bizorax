import ChallangesItems from "./_components/ChallangesItems";
import ChallangesToday from "./_components/ChallangesToday";
import ChallengesHero from "./_components/ChallengesHero";

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

export default function Challenges() {
    return (
        <>
            <ChallengesHero />
            <ChallangesToday />
            <ChallangesItems />
        </>
    );
}
