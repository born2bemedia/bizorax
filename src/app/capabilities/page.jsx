import CapabilitiesHero from "./_components/CapabilitiesHero";
import CapabilitiesPlans from "./_components/CapabilitiesPlans";
import CapabilitiesPricelist from "./_components/CapabilitiesPricelist";
import CapabilitiesReady from "./_components/CapabilitiesReady";
import CapabilitiesServices from "./_components/CapabilitiesServices";
import CapabilitiesText from "./_components/CapabilitiesText";


export const metadata = {
    title: "Comprehensive Business Capabilities by Bizorax",
    description:
        "Discover Bizorax’s full range of tailored business solutions, including strategic planning, digital transformation, and market expansion.",
    openGraph: {
        title: "Comprehensive Business Capabilities by Bizorax",
        description:
            "Discover Bizorax’s full range of tailored business solutions, including strategic planning, digital transformation, and market expansion.",
        images: "/images/meta-banner.jpg",
    },
};

export default function Capabilities() {
    return (
        <>
            <CapabilitiesHero />
            <CapabilitiesText />
            <CapabilitiesPlans />
            <CapabilitiesServices />
            <CapabilitiesPricelist />
            <CapabilitiesReady />
        </>
    );
}
