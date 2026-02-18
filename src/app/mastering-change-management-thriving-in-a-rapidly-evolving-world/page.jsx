import ArticleHero from "./_components/ArticleHero";
import ArticleMain from "./_components/ArticleMain";


export const metadata = {
    title: "Mastering Change Management: Thriving in a Rapidly Evolving World",
    description:
        "Explore how businesses can successfully navigate change and thrive in a constantly evolving landscape.",
    openGraph: {
        title: "Mastering Change Management: Thriving in a Rapidly Evolving World",
        description:
            "Explore how businesses can successfully navigate change and thrive in a constantly evolving landscape.",
        images: "/images/meta-banner.jpg",
    },
};

export default function Article01() {
    return (
        <>
            <ArticleHero />
            <ArticleMain />
        </>
    );
}
