import "@/styles/base.scss";
import AppproachHow from "./_components/AppproachHow";
import ApproachEvery from "./_components/ApproachEvery";
import ApproachHero from "./_components/ApproachHero";
import ApproachOur from "./_components/ApproachOur";
import ApproachReady from "./_components/ApproachReady";
import AppproachSolutions from "./_components/ApproachSolutions";
import ApproachWhat from "./_components/ApproachWhat";
import HomePartners from "./_components/HomePartners";


export const metadata = {
    title: "Our Proven Approach to Business Success | Bizorax",
    description:
        "Learn how Bizorax’s structured and innovative approach helps businesses achieve measurable results and sustained growth.",
    openGraph: {
        title: "Our Proven Approach to Business Success | Bizorax",
        description:
            "Learn how Bizorax’s structured and innovative approach helps businesses achieve measurable results and sustained growth.",
        images: "/images/meta-banner.jpg",
    },
};

export default function Approach() {
    return (
        <>
            <ApproachHero />
            <ApproachEvery />
            <ApproachWhat />
            <ApproachOur />
            <AppproachSolutions />
            <HomePartners />
            <AppproachHow />
            <ApproachReady />
        </>
    );
}
