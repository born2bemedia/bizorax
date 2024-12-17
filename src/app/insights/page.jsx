import InsightsHero from "./_components/InsightsHero";
import InsightsMain from "./_components/InsightsMain";


export const metadata = {
    title: "Bizorax Insights | Articles and Strategies for Business Growth",
    description:
        "Stay informed with expert insights, actionable tips, and the latest business strategy and innovation trends from Bizorax.",
    openGraph: {
        title: "Bizorax Insights | Articles and Strategies for Business Growth",
        description:
            "Stay informed with expert insights, actionable tips, and the latest business strategy and innovation trends from Bizorax.",
        images: "/images/meta-banner.jpg",
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
