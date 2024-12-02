import ChallangesEvery from "./_components/ChallangesEvery";
import ChallangesGlobal from "./_components/ChallangesGlobal";
import ChallangesItems from "./_components/ChallangesItems";
import ChallangesOur from "./_components/ChallangesOur";
import ChallangesReady from "./_components/ChallangesReady";
import ChallangesTabs from "./_components/ChallangesTabs";
import ChallangesTackle from "./_components/ChallangesTackle";
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
            <ChallangesEvery />
            <ChallangesTabs />
            <ChallangesReady />
            <ChallangesOur />
            <ChallangesGlobal />
            <ChallangesTackle />
        </>
    );
}
