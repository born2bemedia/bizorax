import InduscriesActions from "./_components/InduscriesActions";
import InduscriesTransform from "./_components/InduscriesTransform";
import IndustriesHero from "./_components/IndustriesHero";
import IndustriesOur from "./_components/IndustriesOur";
import IndustriesServe from "./_components/IndustriesServe";
import IndustriesSpec from "./_components/IndustriesSpec";
import IndustriesText from "./_components/IndustriesText";
import IndustriesUnder from "./_components/IndustriesUnder";

export const metadata = {
    title: "Industries We Serve | Bizorax’s Expertise Across Sectors",
    description:
        "Bizorax provides specialised solutions for healthcare, finance, technology, and more industries. Learn how we can help your sector thrive.",
    openGraph: {
        title: "Industries We Serve | Bizorax’s Expertise Across Sectors",
        description:
            "Bizorax provides specialised solutions for healthcare, finance, technology, and more industries. Learn how we can help your sector thrive.",
        images: "/images/meta-banner.jpg",
    },
};

export default function Industries() {
    return (
        <>
            <IndustriesHero />
            <IndustriesServe />
            <IndustriesText />
            <IndustriesOur />
            <IndustriesSpec />
            <IndustriesUnder />
            <InduscriesActions />
            <InduscriesTransform />
        </>
    );
}
