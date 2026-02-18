import MultiStepForm from "./_components/MultiStepForm";
import RequestHero from "./_components/RequestHero";
import RequestMessage from "./_components/RequestMessage";

export const metadata = {
    title: "Request Tailored Business Solutions | Bizorax",
    description:
        "Let Bizorax craft a customised plan for your business. Share your needs, and our experts will design a strategy just for you.",
    openGraph: {
        title: "Request Tailored Business Solutions | Bizorax",
        description:
            "Let Bizorax craft a customised plan for your business. Share your needs, and our experts will design a strategy just for you.",
        images: "/images/meta-banner.jpg",
    },
};

export default function Request() {
    return (
        <>
            <RequestHero />
            <MultiStepForm />
        </>
    );
}
