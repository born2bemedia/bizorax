import ArticleHero from "./_components/ArticleHero";
import ArticleMain from "./_components/ArticleMain";


export const metadata = {
    title: "The Rise of AI in Business: Opportunities and Challenges in 2025",
    description:
        "Understand how AI transforms industries, the opportunities it brings, and the challenges businesses must address in 2025.",
    openGraph: {
        title: "The Rise of AI in Business: Opportunities and Challenges in 2025",
        description:
            "Understand how AI transforms industries, the opportunities it brings, and the challenges businesses must address in 2025.",
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
