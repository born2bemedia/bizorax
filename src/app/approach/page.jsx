import AppproachHow from "./_components/AppproachHow";
import ApproachEvery from "./_components/ApproachEvery";
import ApproachHero from "./_components/ApproachHero";
import ApproachOur from "./_components/ApproachOur";
import ApproachReady from "./_components/ApproachReady";
import ApproachSliders from "./_components/ApproachSliders";
import AppproachSolutions from "./_components/ApproachSolutions";
import ApproachWhat from "./_components/ApproachWhat";


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

export default function Approach() {
    return (
        <>
            <ApproachHero />
            <ApproachEvery />
            <ApproachWhat />
            <ApproachOur />
            <AppproachSolutions />
            <ApproachSliders />
            <AppproachHow />
            <ApproachReady />
        </>
    );
}
