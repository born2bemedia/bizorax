import CasesBusiness from "./_components/CasesBusiness";
import CasesHero from "./_components/CasesHero";
import CasesStudies from "./_components/CasesStudies";

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

export default function Cases() {
    return (
        <>
            <CasesHero />
            <CasesStudies />
            <CasesBusiness />
        </>
    );
}
