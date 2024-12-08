import CapabilitiesHero from "./_components/CapabilitiesHero";
import CapabilitiesPlans from "./_components/CapabilitiesPlans";
import CapabilitiesPricelist from "./_components/CapabilitiesPricelist";
import CapabilitiesReady from "./_components/CapabilitiesReady";
import CapabilitiesServices from "./_components/CapabilitiesServices";
import CapabilitiesText from "./_components/CapabilitiesText";


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
