import InsightsHero from "./_components/InsightsHero";
import InsightsMain from "./_components/InsightsMain";


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

export default function Insights() {
    return (
        <>
            <InsightsHero />
            <InsightsMain />
        </>
    );
}
