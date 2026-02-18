import CasesBusiness from "./_components/CasesBusiness";
import CasesHero from "./_components/CasesHero";
import CasesStudies from "./_components/CasesStudies";

export const metadata = {
    title: "Bizorax Case Studies | Real Stories, Real Results",
    description:
        "Explore Bizorax’s case studies to see how we’ve helped businesses across industries overcome challenges and achieve measurable success.",
    openGraph: {
        title: "Bizorax Case Studies | Real Stories, Real Results",
        description:
            "Explore Bizorax’s case studies to see how we’ve helped businesses across industries overcome challenges and achieve measurable success.",
        images: "/images/meta-banner.jpg",
    },
};

export default function Cases() {
    return (
        <>
            <CasesHero />
            <CasesStudies />
            <CasesBusiness />
        </>
    );
}
