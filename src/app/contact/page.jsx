import ContactHero from "./_components/ContactHero";
import ContactMain from "./_components/ContactMain";
import ContactTake from "./_components/ContactTake";

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

export default function Contact() {
    return (
        <>
            <ContactHero />
            <ContactMain />
            <ContactTake />
        </>
    );
}
