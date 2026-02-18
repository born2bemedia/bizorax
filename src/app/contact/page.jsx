import ContactHero from "./_components/ContactHero";
import ContactMain from "./_components/ContactMain";
import ContactTake from "./_components/ContactTake";

export const metadata = {
    title: "Contact Bizorax | Let’s Talk Business Solutions",
    description:
        "Reach out to Bizorax for inquiries, collaborations, or tailored solutions. We’re here to help your business thrive.",
    openGraph: {
        title: "Contact Bizorax | Let’s Talk Business Solutions",
        description:
            "Reach out to Bizorax for inquiries, collaborations, or tailored solutions. We’re here to help your business thrive.",
        images: "/images/meta-banner.jpg",
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
