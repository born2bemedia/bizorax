import MultiStepForm from "./_components/MultiStepForm";
import RequestHero from "./_components/RequestHero";
import RequestMessage from "./_components/RequestMessage";

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

export default function Request() {
    return (
        <>
            <RequestHero />
            <MultiStepForm />
        </>
    );
}
